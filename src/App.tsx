import React, { useState, useRef, useMemo } from 'react';
import * as XLSX from 'xlsx-js-style';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, BarChart3, Download, Trash2, FileText, X, AlertTriangle, FileCheck, ArrowUpDown, ListOrdered } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProcessedFile {
  name: string;
  size: number;
  status: 'success' | 'error';
  errorMsg?: string;
  data?: any;
  syndicate?: string;
}

interface CandidateData {
  votes: number;
  originalIndex: number;
}

interface SheetResult {
  attendance: number;
  valid: number;
  invalid: number;
  candidates: Record<string, CandidateData>;
}

const detectSyndicate = (fileName: string) => {
  const syndicates = [
    { name: 'القاهرة' }, { name: 'الجيزة' }, { name: 'القليوبية' }, { name: 'الإسكندرية' },
    { name: 'المنوفية' }, { name: 'بورسعيد' }, { name: 'الإسماعيلية' }, { name: 'السويس' },
    { name: 'الغربية' }, { name: 'الدقهلية' }, { name: 'كفر الشيخ' }, { name: 'البحيرة' },
    { name: 'الفيوم' }, { name: 'قنا' }, { name: 'أسوان' }, { name: 'سوهاج' },
    { name: 'أسيوط' }, { name: 'المنيا' }, { name: 'البحر الأحمر' }, { name: 'الوادي الجديد' },
    { name: 'شمال سيناء', aliases: ['العريش'] }, { name: 'الشرقية' }, { name: 'دمياط' },
    { name: 'بني سويف' }, { name: 'مطروح' }, { name: 'الأقصر' }, { name: 'جنوب سيناء' }
  ];

  for (const syn of syndicates) {
    if (fileName.includes(syn.name)) return syn.name;
    if (syn.aliases) {
      for (const alias of syn.aliases) {
        if (fileName.includes(alias)) return syn.name;
      }
    }
  }
  return 'غير محدد';
};

export default function App() {
  const [files, setFiles] = useState<ProcessedFile[]>([]);
  const [results, setResults] = useState<Record<string, SheetResult>>({});
  const [activeTab, setActiveTab] = useState<'upload' | 'dashboard' | 'results'>('upload');
  const [sortBy, setSortBy] = useState<'original' | 'votes'>('original');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      processFiles(newFiles);
    }
  };

  const processFiles = async (newFiles: File[]) => {
    const updatedFiles = [...files];
    const newResults = { ...results };

    for (const file of newFiles) {
      if (updatedFiles.some(f => f.name === file.name && f.size === file.size)) {
        updatedFiles.push({
          name: file.name,
          size: file.size,
          status: 'error',
          errorMsg: 'تم رفع هذا الملف مسبقاً'
        });
        continue;
      }

      try {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        
        let isValidFile = false;
        const fileData: any = {};
        const syndicateName = detectSyndicate(file.name);

        workbook.SheetNames.forEach(originalSheetName => {
          if (originalSheetName.toLowerCase() === 'metadata') return;

          const sheet = workbook.Sheets[originalSheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          
          if (jsonData.length > 0) {
             isValidFile = true;
             
             let sheetName = originalSheetName;
             if (sheetName.includes('نقيب فرعي') || sheetName.includes('رئيس النقابة الفرعية')) {
               sheetName = `نقيب فرعي - ${syndicateName}`;
             }

             if (!newResults[sheetName]) {
               newResults[sheetName] = { attendance: 0, valid: 0, invalid: 0, candidates: {} };
             }
             if (!fileData[sheetName]) {
               fileData[sheetName] = { attendance: 0, valid: 0, invalid: 0, candidates: {} };
             }
             
             jsonData.forEach((row: any, index: number) => {
                const candidateName = row['CandidateName'] || row['اسم المرشح'] || row['المرشح'] || row['الاسم'] || Object.values(row)[0];
                const votes = parseInt(row['Votes'] || row['الأصوات'] || row['عدد الأصوات'] || row['الاصوات'] || Object.values(row)[1] || 0, 10);
                
                if (candidateName && typeof candidateName === 'string' && !isNaN(votes)) {
                  const nameStr = candidateName.trim();
                  
                  if (nameStr.includes('إجمالي الحضور') || nameStr.includes('اجمالي الحضور') || nameStr === 'الحضور' || nameStr === 'إجمالي' || nameStr === 'اجمالي') {
                    newResults[sheetName].attendance += votes;
                    fileData[sheetName].attendance += votes;
                  } else if (nameStr.includes('الأصوات الصحيحة') || nameStr.includes('الاصوات الصحيحة') || nameStr === 'الصحيح' || nameStr === 'صحيح') {
                    newResults[sheetName].valid += votes;
                    fileData[sheetName].valid += votes;
                  } else if (nameStr.includes('الأصوات الباطلة') || nameStr.includes('الاصوات الباطلة') || nameStr === 'الباطل' || nameStr === 'باطل') {
                    newResults[sheetName].invalid += votes;
                    fileData[sheetName].invalid += votes;
                  } else {
                    if (!newResults[sheetName].candidates[nameStr]) {
                      newResults[sheetName].candidates[nameStr] = { votes: 0, originalIndex: index };
                    }
                    newResults[sheetName].candidates[nameStr].votes += votes;
                    
                    if (!fileData[sheetName].candidates[nameStr]) {
                      fileData[sheetName].candidates[nameStr] = { votes: 0, originalIndex: index };
                    }
                    fileData[sheetName].candidates[nameStr].votes += votes;
                  }
                }
             });
          }
        });

        if (isValidFile) {
          updatedFiles.push({
            name: file.name,
            size: file.size,
            status: 'success',
            data: fileData,
            syndicate: syndicateName
          });
        } else {
          updatedFiles.push({
            name: file.name,
            size: file.size,
            status: 'error',
            errorMsg: 'الملف لا يحتوي على بيانات صحيحة أو أوراق عمل صالحة'
          });
        }

      } catch (err: any) {
        updatedFiles.push({
          name: file.name,
          size: file.size,
          status: 'error',
          errorMsg: `خطأ في القراءة: ${err.message}`
        });
      }
    }

    setResults(newResults);
    setFiles(updatedFiles);
  };

  const removeFile = (indexToRemove: number) => {
    const fileToRemove = files[indexToRemove];
    if (fileToRemove.status === 'success' && fileToRemove.data) {
      const newResults = { ...results };
      Object.keys(fileToRemove.data).forEach(sheetName => {
        if (newResults[sheetName]) {
          newResults[sheetName].attendance -= fileToRemove.data[sheetName].attendance || 0;
          newResults[sheetName].valid -= fileToRemove.data[sheetName].valid || 0;
          newResults[sheetName].invalid -= fileToRemove.data[sheetName].invalid || 0;

          Object.keys(fileToRemove.data[sheetName].candidates).forEach(candidate => {
            if (newResults[sheetName].candidates[candidate]) {
              newResults[sheetName].candidates[candidate].votes -= fileToRemove.data[sheetName].candidates[candidate].votes;
              if (newResults[sheetName].candidates[candidate].votes <= 0) {
                delete newResults[sheetName].candidates[candidate];
              }
            }
          });

          if (Object.keys(newResults[sheetName].candidates).length === 0) {
            delete newResults[sheetName];
          }
        }
      });
      setResults(newResults);
    }
    setFiles(files.filter((_, idx) => idx !== indexToRemove));
  };

  const clearData = () => {
    if (window.confirm('هل أنت متأكد من مسح جميع البيانات؟')) {
      setFiles([]);
      setResults({});
    }
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    
    Object.keys(results).forEach(sheetName => {
      const sheetData = results[sheetName];
      
      const data: any[] = [
        { 'البيان': 'إجمالي الحضور', 'العدد': sheetData.attendance },
        { 'البيان': 'الأصوات الصحيحة', 'العدد': sheetData.valid },
        { 'البيان': 'الأصوات الباطلة', 'العدد': sheetData.invalid },
        { 'البيان': '', 'العدد': null }
      ];

      const candidatesArray = Object.entries(sheetData.candidates).map(([name, data]) => ({
        name,
        votes: data.votes,
        originalIndex: data.originalIndex
      }));

      if (sortBy === 'votes') {
        candidatesArray.sort((a, b) => b.votes - a.votes);
      } else {
        candidatesArray.sort((a, b) => a.originalIndex - b.originalIndex);
      }

      candidatesArray.forEach(c => {
        data.push({
          'البيان': c.name,
          'العدد': c.votes
        });
      });
      
      const ws = XLSX.utils.json_to_sheet(data);
      
      // Styling
      const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 14 },
        fill: { fgColor: { rgb: "1E3A8A" } }, // Tailwind blue-900
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      };

      const summaryStyle = {
        font: { bold: true, sz: 12 },
        fill: { fgColor: { rgb: "F1F5F9" } }, // Tailwind slate-100
        alignment: { horizontal: "right", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CBD5E1" } },
          bottom: { style: "thin", color: { rgb: "CBD5E1" } },
          left: { style: "thin", color: { rgb: "CBD5E1" } },
          right: { style: "thin", color: { rgb: "CBD5E1" } }
        }
      };

      const summaryValueStyle = {
        font: { bold: true, sz: 12, color: { rgb: "1E40AF" } },
        fill: { fgColor: { rgb: "F1F5F9" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CBD5E1" } },
          bottom: { style: "thin", color: { rgb: "CBD5E1" } },
          left: { style: "thin", color: { rgb: "CBD5E1" } },
          right: { style: "thin", color: { rgb: "CBD5E1" } }
        }
      };

      const cellStyle = {
        font: { sz: 12 },
        alignment: { horizontal: "right", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "E2E8F0" } },
          bottom: { style: "thin", color: { rgb: "E2E8F0" } },
          left: { style: "thin", color: { rgb: "E2E8F0" } },
          right: { style: "thin", color: { rgb: "E2E8F0" } }
        }
      };

      const numberStyle = {
        font: { sz: 12, bold: true },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "E2E8F0" } },
          bottom: { style: "thin", color: { rgb: "E2E8F0" } },
          left: { style: "thin", color: { rgb: "E2E8F0" } },
          right: { style: "thin", color: { rgb: "E2E8F0" } }
        }
      };

      const divisionHeaderStyle = {
        font: { bold: true, sz: 13, color: { rgb: "0F172A" } },
        fill: { fgColor: { rgb: "E2E8F0" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "medium", color: { rgb: "94A3B8" } },
          bottom: { style: "medium", color: { rgb: "94A3B8" } },
          left: { style: "thin", color: { rgb: "E2E8F0" } },
          right: { style: "thin", color: { rgb: "E2E8F0" } }
        }
      };

      const subCategoryHeaderStyle = {
        font: { bold: true, sz: 12, color: { rgb: "1E40AF" } }, // Tailwind blue-800
        fill: { fgColor: { rgb: "EFF6FF" } }, // Tailwind blue-50
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "BFDBFE" } }, // Tailwind blue-200
          bottom: { style: "thin", color: { rgb: "BFDBFE" } },
          left: { style: "thin", color: { rgb: "BFDBFE" } },
          right: { style: "thin", color: { rgb: "BFDBFE" } }
        }
      };

      const range = XLSX.utils.decode_range(ws['!ref'] || 'A1:B1');
      
      for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const cellAddress = { c: C, r: R };
          const cellRef = XLSX.utils.encode_cell(cellAddress);
          if (!ws[cellRef]) continue;

          if (R === 0) {
            ws[cellRef].s = headerStyle;
          } else if (R >= 1 && R <= 3) {
            ws[cellRef].s = C === 0 ? summaryStyle : summaryValueStyle;
          } else if (R === 4) {
            // Empty row
            ws[cellRef].s = { fill: { fgColor: { rgb: "FFFFFF" } } };
          } else {
            const rowData = data[R - 1]; // -1 because of header
            const isDivisionHeader = rowData['العدد'] === 0 && (rowData['البيان'].includes('شعبة') || rowData['البيان'].includes('مطلوب') || rowData['البيان'].includes('منصب'));
            const isSubCategoryHeader = rowData['العدد'] === 0 && rowData['البيان'].includes('مقعد');
            
            if (isDivisionHeader) {
              ws[cellRef].s = divisionHeaderStyle;
            } else if (isSubCategoryHeader) {
              ws[cellRef].s = subCategoryHeaderStyle;
            } else {
              ws[cellRef].s = C === 0 ? cellStyle : numberStyle;
            }
          }
        }
        
        // Merge cells for division headers
        const rowData = data[R - 1];
        if (rowData && rowData['العدد'] === 0 && (rowData['البيان'].includes('شعبة') || rowData['البيان'].includes('مطلوب') || rowData['البيان'].includes('منصب') || rowData['البيان'].includes('مقعد'))) {
           if (!ws['!merges']) ws['!merges'] = [];
           ws['!merges'].push({ s: { r: R, c: 0 }, e: { r: R, c: 1 } });
        }
      }

      ws['!cols'] = [{wch: 50}, {wch: 20}];
      
      // Set RTL for the sheet
      if(!ws['!views']) ws['!views'] = [];
      ws['!views'].push({ rightToLeft: true });

      XLSX.utils.book_append_sheet(wb, ws, sheetName.substring(0, 31));
    });
    
    XLSX.writeFile(wb, 'النتائج_النهائية_المجمعة.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    doc.setFontSize(18);
    doc.text('Election Aggregated Results', 105, 20, { align: 'center' });
    
    let yPos = 30;
    
    Object.keys(results).forEach((sheetName, index) => {
      if (index > 0) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(14);
      doc.text(`Category: ${sheetName}`, 14, yPos);
      yPos += 10;
      
      const sheetData = results[sheetName];
      
      const summaryData = [
        ['Total Attendance', sheetData.attendance.toString()],
        ['Valid Votes', sheetData.valid.toString()],
        ['Invalid Votes', sheetData.invalid.toString()]
      ];

      (doc as any).autoTable({
        startY: yPos,
        body: summaryData,
        theme: 'grid',
        styles: { font: 'helvetica', halign: 'right' },
        columnStyles: { 0: { halign: 'right', fontStyle: 'bold' }, 1: { halign: 'center', cellWidth: 30 } }
      });

      yPos = (doc as any).lastAutoTable.finalY + 10;

      const candidatesArray = Object.entries(sheetData.candidates).map(([name, data]) => ({
        name,
        votes: data.votes,
        originalIndex: data.originalIndex
      }));

      if (sortBy === 'votes') {
        candidatesArray.sort((a, b) => b.votes - a.votes);
      } else {
        candidatesArray.sort((a, b) => a.originalIndex - b.originalIndex);
      }
      
      const totalVotes = sheetData.valid > 0 ? sheetData.valid : candidatesArray.reduce((sum, c) => sum + c.votes, 0);
      
      const tableData = candidatesArray.map((c, idx) => {
        if (c.votes === 0 && (c.name.includes('شعبة') || c.name.includes('مطلوب') || c.name.includes('منصب'))) {
          return [{ content: c.name, colSpan: 3, styles: { halign: 'center', fontStyle: 'bold', fillColor: [226, 232, 240], textColor: [15, 23, 42] } }];
        }
        if (c.votes === 0 && c.name.includes('مقعد')) {
          return [{ content: c.name, colSpan: 3, styles: { halign: 'center', fontStyle: 'bold', fillColor: [239, 246, 255], textColor: [30, 64, 175] } }];
        }
        return [(idx + 1).toString(), c.name, c.votes.toString()];
      });
      
      (doc as any).autoTable({
        startY: yPos,
        head: [['#', 'Candidate Name', 'Votes']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [30, 58, 138], textColor: 255, fontStyle: 'bold' }, // Tailwind blue-900
        styles: { font: 'helvetica', halign: 'right' },
        columnStyles: {
          0: { halign: 'center', cellWidth: 15 },
          1: { halign: 'right' },
          2: { halign: 'center', cellWidth: 30 }
        }
      });
      
      yPos = (doc as any).lastAutoTable.finalY + 10;
    });
    
    doc.save('النتائج_النهائية.pdf');
  };

  const successfulFiles = files.filter(f => f.status === 'success');
  const errorFiles = files.filter(f => f.status === 'error');
  
  const totalVotesOverall = useMemo(() => {
    return Object.values(results).reduce((acc: number, sheet: SheetResult) => {
      return acc + Object.values(sheet.candidates).reduce((sum: number, val) => sum + val.votes, 0);
    }, 0);
  }, [results]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200" dir="rtl">
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-blue-800/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-2xl shadow-inner border border-white/20 backdrop-blur-sm overflow-hidden">
              <img src="https://general-committee-eng-dtunit-apa.netlify.app/logo.jpg" alt="Logo" className="w-10 h-10 object-cover rounded-xl" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-blue-200/90 text-xs font-bold mb-1 tracking-wide">
                اللجنة القضائية العليا - النيابة الادارية
              </p>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-white to-blue-200">
                تجميع نتائج اللجان العامة
              </h1>
              <p className="text-blue-200/80 text-sm font-medium mt-1 tracking-wide">
                انتخابات نقابة المهندسين ٢٠٢٦ - النظام المجمع
              </p>
            </div>
          </div>
          <div className="flex bg-slate-900/50 p-1.5 rounded-xl border border-white/10 backdrop-blur-md shadow-inner">
            <button 
              onClick={() => setActiveTab('upload')}
              className={cn("px-6 py-2.5 rounded-lg transition-all text-sm font-bold flex items-center gap-2", activeTab === 'upload' ? "bg-white text-blue-900 shadow-md scale-105" : "text-slate-300 hover:text-white hover:bg-white/10")}
            >
              <Upload className="w-4 h-4" />
              الاستيراد
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={cn("px-6 py-2.5 rounded-lg transition-all text-sm font-bold flex items-center gap-2", activeTab === 'dashboard' ? "bg-white text-blue-900 shadow-md scale-105" : "text-slate-300 hover:text-white hover:bg-white/10")}
            >
              <BarChart3 className="w-4 h-4" />
              لوحة التحكم
            </button>
            <button 
              onClick={() => setActiveTab('results')}
              className={cn("px-6 py-2.5 rounded-lg transition-all text-sm font-bold flex items-center gap-2", activeTab === 'results' ? "bg-white text-blue-900 shadow-md scale-105" : "text-slate-300 hover:text-white hover:bg-white/10")}
            >
              <FileCheck className="w-4 h-4" />
              النتائج النهائية
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-7xl">
        {activeTab === 'upload' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
              <div 
                className="border-2 border-dashed border-blue-300 rounded-2xl p-16 bg-blue-50/30 hover:bg-blue-50/80 transition-all cursor-pointer group hover:border-blue-400"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-24 h-24 bg-white shadow-sm text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 border border-blue-100">
                  <Upload className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">اضغط أو اسحب ملفات Excel هنا</h3>
                <p className="text-slate-500 text-base max-w-lg mx-auto font-medium leading-relaxed">
                  قم برفع ملفات النتائج المستخرجة من اللجان الفرعية. يدعم النظام ملفات بصيغة .xlsx و .xls ويقوم بتجميع الأصوات تلقائياً.
                </p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept=".xlsx,.xls" 
                  multiple 
                  className="hidden" 
                />
              </div>
            </div>

            {files.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/80">
                  <h3 className="font-black text-xl flex items-center gap-3 text-slate-800 tracking-tight">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    الملفات المعالجة ({files.length})
                  </h3>
                  <button onClick={clearData} className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-4 py-2 rounded-xl transition-colors text-sm flex items-center gap-2 font-bold border border-transparent hover:border-rose-200">
                    <Trash2 className="w-4 h-4" />
                    مسح الكل
                  </button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {files.map((file, idx) => (
                      <div key={idx} className={cn(
                        "flex items-start gap-4 p-5 border rounded-2xl relative group transition-all",
                        file.status === 'success' ? "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md" : "bg-rose-50 border-rose-200"
                      )}>
                        {file.status === 'success' ? (
                          <div className="bg-emerald-50 p-2 rounded-full text-emerald-500 shrink-0">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                        ) : (
                          <div className="bg-rose-100 p-2 rounded-full text-rose-500 shrink-0">
                            <AlertCircle className="w-6 h-6" />
                          </div>
                        )}
                        <div className="overflow-hidden flex-1">
                          <p className="text-base font-bold text-slate-800 truncate" title={file.name}>{file.name}</p>
                          <p className="text-sm text-slate-500 mt-1 font-medium">{(file.size / 1024).toFixed(1)} KB {file.syndicate && `• ${file.syndicate}`}</p>
                          {file.status === 'error' && (
                            <p className="text-sm text-rose-600 mt-2 font-bold bg-rose-100/50 p-2 rounded-lg border border-rose-200/50">{file.errorMsg}</p>
                          )}
                        </div>
                        <button 
                          onClick={() => removeFile(idx)}
                          className="absolute top-3 left-3 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all border border-transparent hover:border-rose-200"
                          title="حذف الملف"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-all">
                 <div className="absolute top-0 right-0 w-1.5 h-full bg-blue-500"></div>
                 <div className="text-slate-500 text-sm font-bold mb-3 flex items-center gap-2">
                   <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                     <FileSpreadsheet className="w-5 h-5" />
                   </div>
                   إجمالي الملفات
                 </div>
                 <div className="text-4xl font-black text-slate-800 tracking-tight">{files.length}</div>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-all">
                 <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500"></div>
                 <div className="text-slate-500 text-sm font-bold mb-3 flex items-center gap-2">
                   <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                     <CheckCircle className="w-5 h-5" />
                   </div>
                   ملفات صحيحة
                 </div>
                 <div className="text-4xl font-black text-slate-800 tracking-tight">{successfulFiles.length}</div>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-all">
                 <div className="absolute top-0 right-0 w-1.5 h-full bg-rose-500"></div>
                 <div className="text-slate-500 text-sm font-bold mb-3 flex items-center gap-2">
                   <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                     <AlertTriangle className="w-5 h-5" />
                   </div>
                   ملفات بها أخطاء
                 </div>
                 <div className="text-4xl font-black text-slate-800 tracking-tight">{errorFiles.length}</div>
               </div>
               <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-2xl shadow-md border border-blue-800 flex flex-col justify-center relative overflow-hidden text-white group hover:shadow-lg transition-all">
                 <div className="absolute -left-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                   <BarChart3 className="w-32 h-32" />
                 </div>
                 <div className="text-blue-200 text-sm font-bold mb-3 flex items-center gap-2 relative z-10">
                   <div className="bg-white/10 p-2 rounded-lg text-white backdrop-blur-sm">
                     <BarChart3 className="w-5 h-5" />
                   </div>
                   إجمالي الأصوات للمرشحين
                 </div>
                 <div className="text-4xl font-black text-white relative z-10 tracking-tight">
                   {totalVotesOverall.toLocaleString()}
                 </div>
               </div>
             </div>
             
             <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
               <div className="p-6 border-b border-slate-100 bg-slate-50/80">
                 <h3 className="font-black text-xl text-slate-800 tracking-tight">ملخص التجميع حسب الفئات</h3>
               </div>
               <div className="p-6">
                 {Object.keys(results).length === 0 ? (
                   <div className="text-center py-20 text-slate-500 flex flex-col items-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/60">
                     <div className="bg-white p-6 rounded-full mb-6 border border-slate-100 shadow-sm">
                       <FileSpreadsheet className="w-16 h-16 text-slate-300" />
                     </div>
                     <p className="text-2xl font-black text-slate-700 mb-2">لا توجد بيانات مجمعة حتى الآن</p>
                     <p className="text-slate-500 font-medium">يرجى رفع ملفات النتائج من تبويب الاستيراد</p>
                     <button 
                       onClick={() => setActiveTab('upload')}
                       className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                     >
                       الذهاب للاستيراد
                     </button>
                   </div>
                 ) : (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                     {Object.keys(results).map(sheetName => {
                       const sheetData = results[sheetName];
                       const candidatesCount = Object.keys(sheetData.candidates).length;
                       
                       return (
                         <div key={sheetName} className="flex flex-col justify-between p-6 bg-white border border-slate-200/80 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group cursor-default relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="mb-4">
                             <h4 className="font-black text-slate-800 text-lg mb-1 leading-tight">{sheetName}</h4>
                             <p className="text-sm text-slate-500 font-medium">{candidatesCount} مرشح</p>
                           </div>
                           <div className="flex items-end justify-between mt-2">
                             <div className="text-slate-400 text-xs font-bold">الأصوات الصحيحة</div>
                             <div className="bg-blue-50 text-blue-700 py-1.5 px-4 rounded-xl font-black text-xl border border-blue-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                               {sheetData.valid.toLocaleString()}
                             </div>
                           </div>
                         </div>
                       );
                     })}
                   </div>
                 )}
               </div>
             </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-200 gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-800">النتائج النهائية المجمعة</h2>
                <p className="text-sm text-slate-500 font-medium mt-1">تفاصيل الأصوات لكل فئة</p>
              </div>
              <div className="flex flex-wrap gap-3 w-full sm:w-auto items-center">
                <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 ml-2">
                  <button
                    onClick={() => setSortBy('original')}
                    className={cn("px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1.5 transition-all", sortBy === 'original' ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900")}
                  >
                    <ListOrdered className="w-4 h-4" />
                    الترتيب الأصلي
                  </button>
                  <button
                    onClick={() => setSortBy('votes')}
                    className={cn("px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1.5 transition-all", sortBy === 'votes' ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900")}
                  >
                    <ArrowUpDown className="w-4 h-4" />
                    الأعلى أصواتاً
                  </button>
                </div>
                <button 
                  onClick={exportToExcel}
                  disabled={Object.keys(results).length === 0}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Excel
                </button>
                <button 
                  onClick={exportToPDF}
                  disabled={Object.keys(results).length === 0}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
                >
                  <FileText className="w-4 h-4" />
                  PDF
                </button>
              </div>
            </div>

            {Object.keys(results).length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-16 text-center text-slate-500 flex flex-col items-center">
                <div className="bg-slate-50 p-6 rounded-full mb-6 border border-slate-100">
                  <BarChart3 className="w-16 h-16 text-slate-300" />
                </div>
                <p className="text-2xl font-black text-slate-700 mb-2">لا توجد نتائج لعرضها</p>
                <p className="text-slate-500 font-medium">قم برفع ملفات اللجان أولاً لرؤية النتائج المجمعة</p>
                <button 
                  onClick={() => setActiveTab('upload')}
                  className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  الذهاب للاستيراد
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.keys(results).map(sheetName => {
                  const sheetData = results[sheetName];
                  
                  const candidatesArray = Object.entries(sheetData.candidates).map(([name, data]) => ({
                    name,
                    votes: data.votes,
                    originalIndex: data.originalIndex
                  }));

                  if (sortBy === 'votes') {
                    candidatesArray.sort((a, b) => b.votes - a.votes);
                  } else {
                    candidatesArray.sort((a, b) => a.originalIndex - b.originalIndex);
                  }
                  
                  const totalValidVotes = sheetData.valid > 0 ? sheetData.valid : candidatesArray.reduce((sum, c) => sum + c.votes, 0);
                  const maxVotes = candidatesArray.length > 0 ? Math.max(...candidatesArray.map(c => c.votes)) : 0;

                  return (
                    <div key={sheetName} className="bg-white rounded-2xl shadow-md border border-slate-200/60 overflow-hidden mb-8">
                      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-6 text-white flex justify-between items-center border-b-4 border-blue-500">
                        <h3 className="font-black text-2xl tracking-tight">{sheetName}</h3>
                      </div>
                      
                      {/* Summary Cards */}
                      <div className="grid grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50/80">
                        <div className="p-5 text-center border-l border-slate-200">
                          <div className="text-slate-500 text-sm font-bold mb-1">إجمالي الحضور</div>
                          <div className="text-3xl font-black text-slate-800">{sheetData.attendance.toLocaleString()}</div>
                        </div>
                        <div className="p-5 text-center border-l border-slate-200">
                          <div className="text-slate-500 text-sm font-bold mb-1">الأصوات الصحيحة</div>
                          <div className="text-3xl font-black text-emerald-600">{sheetData.valid.toLocaleString()}</div>
                        </div>
                        <div className="p-5 text-center">
                          <div className="text-slate-500 text-sm font-bold mb-1">الأصوات الباطلة</div>
                          <div className="text-3xl font-black text-rose-500">{sheetData.invalid.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-right border-collapse">
                          <thead className="bg-slate-100 text-slate-600 text-sm border-b-2 border-slate-200">
                            <tr>
                              <th className="p-4 font-bold w-16 text-center">#</th>
                              <th className="p-4 font-bold">اسم المرشح</th>
                              <th className="p-4 font-bold w-32 text-center">الأصوات</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {candidatesArray.map((c, idx) => {
                              // Check if it's a division/section header (no votes, or specific naming pattern)
                              const isDivisionHeader = c.votes === 0 && (c.name.includes('شعبة') || c.name.includes('مطلوب') || c.name.includes('منصب'));
                              const isSubCategoryHeader = c.votes === 0 && c.name.includes('مقعد');
                              
                              if (isDivisionHeader) {
                                return (
                                  <tr key={c.name} className="bg-slate-200/50 border-y-2 border-slate-300">
                                    <td colSpan={3} className="p-4 font-black text-slate-900 text-lg text-center tracking-wide">
                                      {c.name}
                                    </td>
                                  </tr>
                                );
                              }

                              if (isSubCategoryHeader) {
                                return (
                                  <tr key={c.name} className="bg-blue-50 border-y border-blue-200">
                                    <td colSpan={3} className="p-3 font-bold text-blue-800 text-base text-center">
                                      {c.name}
                                    </td>
                                  </tr>
                                );
                              }

                              return (
                                <tr key={c.name} className="hover:bg-blue-50/50 transition-colors group">
                                  <td className="p-4 text-center">
                                    <span className={cn(
                                      "inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shadow-sm border",
                                      sortBy === 'votes' && idx === 0 ? "bg-amber-100 text-amber-700 border-amber-200" : 
                                      sortBy === 'votes' && idx === 1 ? "bg-slate-200 text-slate-700 border-slate-300" :
                                      sortBy === 'votes' && idx === 2 ? "bg-orange-100 text-orange-800 border-orange-200" :
                                      "text-slate-500 bg-white border-slate-200"
                                    )}>
                                      {idx + 1}
                                    </span>
                                  </td>
                                  <td className="p-4 font-bold text-slate-800 text-lg">{c.name}</td>
                                  <td className="p-4 text-center">
                                    <span className="font-black text-blue-700 text-lg bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{c.votes.toLocaleString()}</span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

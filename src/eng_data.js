export const ENG_DATA = {
  divisions: {
    electrical: { name: 'كهرباء', isLarge: true },
    civil: { name: 'مدني', isLarge: true },
    mechanical: { name: 'ميكانيكا', isLarge: true },
    architecture: { name: 'عمارة', isLarge: true },
    chemical: { name: 'كيمياء ونووية', isLarge: false },
    textile: { name: 'غزل ونسيج', isLarge: false },
    petroleum: { name: 'بترول وتعدين وفلزات', isLarge: false }
  },
  // ✅ v2.5.7: بيانات المقرات واللجان لكل نقابة فرعية
  venues: {
    cairo: [
      {
        id: 1, name: 'استاد القاهرة - ساحة انتظار السيارات الغربى', totalCommittees: 75,
        divisions: {
          electrical:    { count: 25, from: 1,  to: 25 },
          mechanical:    { count: 17, from: 26, to: 42 },
          civil:         { count: 17, from: 43, to: 59 },
          architecture:  { count: 12, from: 60, to: 71 },
          textile:       { count: 1,  from: 72, to: 72 },
          chemical:      { count: 1,  from: 73, to: 73 },
          petroleum:     { count: 2,  from: 74, to: 75 }
        }
      }
    ],
    giza: [
      {
        id: 2, name: 'نادى المهندسين - البحر الأعظم', totalCommittees: 26,
        divisions: {
          electrical:    { count: 8, from: 1,  to: 8 },
          mechanical:    { count: 5, from: 9,  to: 13 },
          civil:         { count: 6, from: 14, to: 19 },
          architecture:  { count: 4, from: 20, to: 23 },
          textile:       { count: 1, from: 24, to: 24 },
          chemical:      { count: 1, from: 25, to: 25 },
          petroleum:     { count: 1, from: 26, to: 26 }
        }
      },
      {
        id: 3, name: 'نادى المهندسين - 6 أكتوبر', totalCommittees: 8,
        divisions: {
          electrical:    { count: 2, from: 1, to: 2 },
          mechanical:    { count: 2, from: 3, to: 4 },
          civil:         { count: 2, from: 5, to: 6 },
          architecture:  { count: 1, from: 7, to: 7 },
          textile:       { count: 1, from: 8, to: 8 },
          chemical:      { count: 1, from: 8, to: 8 },  // ✅ v2.6.1: لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 8, to: 8 }   // ✅ v2.6.1: لجنة مشتركة مع غزل وكيمياء
          // لجنة 8 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    qalyubia: [
      {
        id: 4, name: 'مقر نقابة المهندسين ببنها', totalCommittees: 13,
        divisions: {
          electrical:    { count: 4, from: 1,  to: 4 },
          mechanical:    { count: 3, from: 5,  to: 7 },
          civil:         { count: 4, from: 8,  to: 11 },
          architecture:  { count: 1, from: 12, to: 12 },
          textile:       { count: 1, from: 13, to: 13 },
          chemical:      { count: 1, from: 13, to: 13 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 13, to: 13 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 13 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    alexandria: [
      {
        id: 5, name: 'نادى المهندسين - سابا باشا', totalCommittees: 32,
        divisions: {
          electrical:    { count: 9, from: 1,  to: 9 },
          mechanical:    { count: 8, from: 10, to: 17 },
          civil:         { count: 7, from: 18, to: 24 },
          architecture:  { count: 4, from: 25, to: 28 },
          textile:       { count: 1, from: 29, to: 29 },
          chemical:      { count: 2, from: 30, to: 31 },
          petroleum:     { count: 1, from: 32, to: 32 }
        }
      }
    ],
    monufia: [
      {
        id: 6, name: 'مبنى نقابة المهندسين - شبين الكوم', totalCommittees: 12,
        divisions: {
          electrical:    { count: 5, from: 1,  to: 5 },
          mechanical:    { count: 3, from: 6,  to: 8 },
          civil:         { count: 2, from: 9,  to: 10 },
          architecture:  { count: 1, from: 11, to: 11 },
          textile:       { count: 1, from: 12, to: 12 },
          chemical:      { count: 1, from: 12, to: 12 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 12, to: 12 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 12 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    portsaid: [
      {
        id: 7, name: 'مبنى النقابة ببورسعيد', totalCommittees: 4,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 1, from: 3, to: 3 },
          architecture:  { count: 1, from: 4, to: 4 },
          textile:       { count: 1, from: 4, to: 4 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 4, to: 4 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 4, to: 4 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 4 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    ismailia: [
      {
        id: 8, name: 'مبني النقابة الفرعية بالاسماعيلية', totalCommittees: 6,
        divisions: {
          electrical:    { count: 2, from: 1, to: 2 },
          mechanical:    { count: 1, from: 3, to: 3 },
          civil:         { count: 2, from: 4, to: 5 },
          architecture:  { count: 1, from: 6, to: 6 },
          textile:       { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 6, to: 6 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 6 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    suez: [
      {
        id: 9, name: 'مقر النقابة بالسويس', totalCommittees: 4,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 1, from: 3, to: 3 },
          architecture:  { count: 1, from: 4, to: 4 },
          textile:       { count: 1, from: 4, to: 4 },  // ��جنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 4, to: 4 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 4, to: 4 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 4 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    gharbia: [
      {
        id: 10, name: 'مقر نقابة المهندسين - طنطا', totalCommittees: 11,
        divisions: {
          electrical:    { count: 3, from: 1,  to: 3 },
          mechanical:    { count: 2, from: 4,  to: 5 },
          civil:         { count: 4, from: 6,  to: 9 },
          architecture:  { count: 1, from: 10, to: 10 },
          textile:       { count: 1, from: 11, to: 11 },
          chemical:      { count: 1, from: 11, to: 11 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 11, to: 11 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 11 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      },
      {
        id: 11, name: 'نادي نقابة المهندسين - المحلة الكبري', totalCommittees: 6,
        divisions: {
          electrical:    { count: 2, from: 1, to: 2 },
          mechanical:    { count: 1, from: 3, to: 3 },
          civil:         { count: 2, from: 4, to: 5 },
          architecture:  { count: 1, from: 6, to: 6 },
          textile:       { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 6, to: 6 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 6 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    dakahlia: [
      {
        id: 12, name: 'نادى المهندسين- طلخا', totalCommittees: 18,
        divisions: {
          electrical:    { count: 5, from: 1,  to: 5 },
          mechanical:    { count: 3, from: 6,  to: 8 },
          civil:         { count: 7, from: 9,  to: 15 },
          architecture:  { count: 2, from: 16, to: 17 },
          textile:       { count: 1, from: 18, to: 18 },
          chemical:      { count: 1, from: 18, to: 18 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 18, to: 18 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 18 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    kafr_elsheikh: [
      {
        id: 13, name: 'مبني النقابة - كفر الشيخ', totalCommittees: 7,
        divisions: {
          electrical:    { count: 2, from: 1, to: 2 },
          mechanical:    { count: 1, from: 3, to: 3 },
          civil:         { count: 3, from: 4, to: 6 },
          architecture:  { count: 1, from: 7, to: 7 },
          textile:       { count: 1, from: 7, to: 7 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 7, to: 7 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 7, to: 7 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 7 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    beheira: [
      {
        id: 14, name: 'مقر النقابة - دمنهور', totalCommittees: 12,
        divisions: {
          electrical:    { count: 3, from: 1,  to: 3 },
          mechanical:    { count: 3, from: 4,  to: 6 },
          civil:         { count: 4, from: 7,  to: 10 },
          architecture:  { count: 1, from: 11, to: 11 },
          textile:       { count: 1, from: 12, to: 12 },
          chemical:      { count: 1, from: 12, to: 12 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 12, to: 12 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 12 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    fayoum: [
      {
        id: 15, name: 'نادى محافظة الفيوم الرياضى', totalCommittees: 5,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 2, from: 3, to: 4 },
          architecture:  { count: 1, from: 5, to: 5 },
          textile:       { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 5, to: 5 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 5 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    qena: [
      {
        id: 16, name: 'مقر النقابة الفرعية قنا', totalCommittees: 4,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 1, from: 3, to: 3 },
          architecture:  { count: 1, from: 4, to: 4 },
          textile:       { count: 1, from: 4, to: 4 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 4, to: 4 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 4, to: 4 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 4 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      },
      {
        id: 17, name: 'نادى ريفورم-نجع حمادي', totalCommittees: 2,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة مع كهرباء
          civil:         { count: 1, from: 2, to: 2 },
          architecture:  { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة مع مدني وغزل وكيمياء وتعدين
          textile:       { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة
          chemical:      { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة
          petroleum:     { count: 1, from: 2, to: 2 }   // لجنة 2 مشتركة
          // لجنة 1 = مشتركة: كهرباء + ميكانيكا
          // لجنة 2 = مشتركة: مدني + عمارة + غزل + كيمياء + تعدين
        }
      },
      {
        id: 18, name: 'مقر قوص', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة - كل الشعب
          civil:         { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة
          architecture:  { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة
          textile:       { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة
          chemical:      { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة
          petroleum:     { count: 1, from: 1, to: 1 }   // لجنة 1 مشتركة
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ],
    aswan: [
      {
        id: 19, name: 'نادي المهندسين - اسوان', totalCommittees: 2,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },  // لجنة 1 مشتركة مع كهرباء
          civil:         { count: 1, from: 2, to: 2 },
          architecture:  { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة مع مدني وغزل وكيمياء وتعدين
          textile:       { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة
          chemical:      { count: 1, from: 2, to: 2 },  // لجنة 2 مشتركة
          petroleum:     { count: 1, from: 2, to: 2 }   // لجنة 2 مشتركة
          // لجنة 1 = مشتركة: كهرباء + ميكانيكا
          // لجنة 2 = مشتركة: مدني + عمارة + غزل + كيمياء + تعدين
        }
      },
      {
        id: 20, name: 'نادي المهندسين - كوم امبو', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب ماعدا غزل ونسيج
        }
      },
      {
        id: 21, name: 'مركز شباب - ادفو', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب ماعدا غزل ونسيج
        }
      }
    ],
    sohag: [
      {
        id: 22, name: 'مقر النقابة - مدينة ناصر', totalCommittees: 5,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 2, from: 3, to: 4 },
          architecture:  { count: 1, from: 5, to: 5 },
          textile:       { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 5, to: 5 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 5 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    assiut: [
      {
        id: 23, name: 'مبني النقابة - اسيوط', totalCommittees: 6,
        divisions: {
          electrical:    { count: 2, from: 1, to: 2 },
          mechanical:    { count: 1, from: 3, to: 3 },
          civil:         { count: 2, from: 4, to: 5 },
          architecture:  { count: 1, from: 6, to: 6 },
          textile:       { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 6, to: 6 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 6, to: 6 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 6 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    minya: [
      {
        id: 24, name: 'مقر النقابة بالمنيا', totalCommittees: 7,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 2, from: 2, to: 3 },
          civil:         { count: 2, from: 4, to: 5 },
          architecture:  { count: 1, from: 6, to: 6 },
          textile:       { count: 1, from: 7, to: 7 },
          chemical:      { count: 1, from: 7, to: 7 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 7, to: 7 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 7 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    redsea: [
      {
        id: 25, name: 'الغردقة-مكتبة مصر العامة', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      },
      {
        id: 26, name: 'راس غارب', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ],
    newvalley: [
      {
        id: 27, name: 'مقر النقابة - الخارجة', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      },
      {
        id: 28, name: 'نادي المهندسين - الداخلة', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ],
    north_sinai: [
      {
        id: 29, name: 'مبني النقابة بشارع البوستة', totalCommittees: 2,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 2, to: 2 },
          architecture:  { count: 1, from: 2, to: 2 },
          textile:       { count: 1, from: 2, to: 2 },
          chemical:      { count: 1, from: 2, to: 2 },
          petroleum:     { count: 1, from: 2, to: 2 }
          // لجنة 1 = كهرباء + ميكانيكا
          // لجنة 2 = مدني + عمارة + غزل + كيمياء + بترول
        }
      }
    ],
    sharqia: [
      {
        id: 30, name: 'مبني النقابة بالشرقية', totalCommittees: 15,
        divisions: {
          electrical:    { count: 4, from: 1,  to: 4 },
          mechanical:    { count: 3, from: 5,  to: 7 },
          civil:         { count: 6, from: 8,  to: 13 },
          architecture:  { count: 1, from: 14, to: 14 },
          textile:       { count: 1, from: 15, to: 15 },
          chemical:      { count: 1, from: 15, to: 15 },  // لجنة مشتركة مع غزل وتعدين
          petroleum:     { count: 1, from: 15, to: 15 }   // لجنة مشتركة مع غزل وكيمياء
          // لجنة 15 = لجنة مشتركة تضم 3 شعب: غزل + كيمياء + تعدين
        }
      }
    ],
    damietta: [
      {
        id: 31, name: 'مقر النقابة بدمياط', totalCommittees: 5,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 2, from: 3, to: 4 },
          architecture:  { count: 1, from: 5, to: 5 },
          textile:       { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 5, to: 5 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 5 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      }
    ],
    benisuef: [
      {
        id: 32, name: 'نادى المهندسين ببنى سويف', totalCommittees: 5,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 2, to: 2 },
          civil:         { count: 2, from: 3, to: 4 },
          architecture:  { count: 1, from: 5, to: 5 },
          textile:       { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وكيمياء وتعدين
          chemical:      { count: 1, from: 5, to: 5 },  // لجنة مشتركة مع عمارة وغزل وتعدين
          petroleum:     { count: 1, from: 5, to: 5 }   // لجنة مشتركة مع عمارة وغزل وكيمياء
          // لجنة 5 = لجنة مشتركة تضم 4 شعب: عمارة + غزل + كيمياء + تعدين
        }
      },
      {
        id: 33, name: 'مقر الواسطى', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ],
    matrouh: [
      {
        id: 34, name: 'برج اسكندرية 1ش اسكندرية-مطروح', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ],
    luxor: [
      {
        id: 35, name: 'نادي المدينة المنورة - الاقصر', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      },
      {
        id: 36, name: 'نادي سونيستا - اسنا', totalCommittees: 1,
        divisions: {
          electrical:    { count: 1, from: 1, to: 1 },
          mechanical:    { count: 1, from: 1, to: 1 },
          civil:         { count: 1, from: 1, to: 1 },
          architecture:  { count: 1, from: 1, to: 1 },
          textile:       { count: 1, from: 1, to: 1 },
          chemical:      { count: 1, from: 1, to: 1 },
          petroleum:     { count: 1, from: 1, to: 1 }
          // لجنة 1 = مشتركة: كل الشعب السبع
        }
      }
    ]
    // باقي النقابات تُضاف هنا تباعاً
  },
  // ✅ v2.5.7: تصنيف الورقات
  // divisionBound: هل الورقة مرتبطة بشعبة (تتفرز لكل شعبة على حدة)؟
  // candidatesScope: 'universal' = موحدين في كل النقابات / 'perCommittee' = مختلفين حسب النقابة
  ballots: {
    captain:          { name: 'مقعد النقيب العام',       seats: 1,  divisionBound: false, candidatesScope: 'universal' },
    board:            { name: 'المجلس (مكملين)',          seats: 11, divisionBound: false, candidatesScope: 'universal' },
    sub_captain:      { name: 'رئيس النقابة الفرعية',    seats: 1,  divisionBound: false, candidatesScope: 'perCommittee' },
    general_division: { name: 'مجلس الشعب الهندسية',     seats: 7,  divisionBound: true,  candidatesScope: 'universal' },
    sub_board:        { name: 'مجلس شعبة ا��نقابة الفرعية',    seats: 7,  divisionBound: false, candidatesScope: 'perCommittee' }
  },
  // أسماء مختلفة لكل قسم
  sectionNames: {
    captain: ['م.أحمد النقيب','م.محمود الرئيس','م.خالد العام','م.عمر القائد','م.يوسف المدير','م.طارق الأمين','م.هشام الوكيل','م.سامي النائب','م.كريم المستشار','م.مصطفى الخبير'],
    b_elec: ['م.أحمد كهرباء','م.محمود كهربائي','م.خالد الكهربي','م.عمر فولت','م.يوسف أمبير','م.طارق واط','م.هشام تيار','م.سامي جهد','م.كريم محول','م.مصطفى مولد'],
    b_civil: ['م.أحمد مدني','م.محمود إنشائي','م.خالد البناء','م.عمر الخرسانة','م.يوسف التصميم','م.طارق الأساسات','م.هشام الجسور','م.سامي الطرق','م.كريم المباني','م.مصطفى التشييد'],
    b_mech: ['م.أحمد ميكانيكي','م.محمود المحركات','م.خالد الآلات','م.عمر التبريد','م.يوسف التكييف','م.طارق الهيدروليك','م.هشام الحراري','م.سامي الإنتاج','م.كريم الصيانة','م.مصطفى التصنيع'],
    b_arch: ['م.أحمد معماري','م.محمود التصميم','م.خالد الفني','م.عمر الديكور','م.يوسف التخطيط','م.طارق العمراني','م.هشام الإنشائي','م.سامي الجمالي','م.كريم الهندسي','م.مصطفى الإبداعي'],
    b_chem: ['م.أحمد كيميائي','م.محمود التفاعل','م.خالد المختبر','م.عمر التحليل','م.يوسف البتروكيماوي','م.طارق الصناعي','م.هشام البيئي','م.سامي النووي','م.كريم الطاقة','م.مصطفى المعالجة'],
    b_text: ['م.أحمد غزل','م.محمود نسيج','م.خالد الأقمشة','م.عمر الألياف','م.يوسف الصباغة','م.طارق التجهيز','م.هشام الحياكة','م.سامي الطباعة','م.كريم التصميم','م.مصطفى الجودة'],
    b_petr: ['م.أحمد بترولي','م.محمود التعدين','م.خالد الفلزات','م.عمر الاستخراج','م.يوسف التكرير','م.طارق الحفر','م.هشام الإنتاج','م.سامي المناجم','م.كريم الجيولوجي','م.مصطفى المعادن'],
    senior: ['م.أحمد فوق السن','م.محمود الخبير','م.خالد القديم','م.عمر المخضرم','م.يوسف الكبير','م.طارق الأقدم','م.هشام العريق','م.سامي المتمرس','م.كريم الأصيل','م.مصطفى الرائد'],
    junior: ['م.أحمد تحت السن','م.محمود الشاب','م.خالد الجديد','م.عمر الناشئ','م.يوسف الصغير','م.طارق الحديث','م.هشام الواعد','م.سامي المتحمس','م.كريم النشيط','م.مصطفى الطموح'],
    sub_cap: ['م.أحمد الفرعي','م.محمود المحلي','م.خالد الإقليمي','م.عمر المنطقة','م.يوسف الفرع','م.طارق القطاع','م.هشام الناحية','م.سامي الدائرة','م.كريم المركز','م.مصطفى الوحدة'],
    s_elec: ['م.علي كهرباء فرعي','م.حسن الفرعي','م.سعيد المحلي','م.فاروق الكهربي','م.كمال الفني','م.سمير الطاقة','م.جمال الإضاءة','م.عادل التوزيع','م.وائل الشبكات','م.هاني المحطات'],
    s_civil: ['م.علي مدني فرعي','م.حسن الإنشاء','م.سعيد البناء','م.فاروق التشييد','م.كمال الطرق','م.سمير الجسور','م.جمال الأساسات','م.عادل الخرسانة','م.وائل التصميم','م.هاني المشاريع'],
    s_mech: ['م.علي ميكانيكا فرعي','م.حسن المحركات','م.سعيد الآلات','م.فاروق الصيانة','م.كمال التشغيل','م.سمير الإنتاج','م.جمال التبريد','م.عادل التكييف','م.وائل الهيدروليك','م.هاني الحراري'],
    s_arch: ['م.علي عمارة فرعي','م.حسن التصميم','م.سعيد المعماري','م.فاروق الديكور','م.كمال التخطيط','م.سمير الجمالي','م.جمال الفني','م.عادل الإبداعي','م.وائل الهندسي','م.هاني العمراني'],
    s_chem: ['م.علي كيمياء فرعي','م.حسن المختبر','م.سعيد التحليل','م.فاروق البيئي','م.كمال الصناعي','م.سمير النووي','م.جمال الطاقة','م.عادل المعالجة','م.وائل التفاعل','م.هاني البتروكيماوي'],
    s_text: ['م.علي غزل فرعي','م.حسن النسيج','م.سعيد الأقمشة','م.فاروق الألياف','م.كمال الصباغة','م.سمير التجهيز','م.جمال الحياكة','م.عادل الطباعة','م.وائل التصميم','م.هاني الجودة'],
    s_petr: ['م.علي بترول فرعي','م.حسن التعدين','م.سعيد الفلزات','م.فاروق الاستخراج','م.كمال التكرير','م.سمير الحفر','م.جمال الإنتاج','م.عادل المناجم','م.وائل الجيولوجي','م.هاني المعادن']
  },
  symbols: ['⭐','🌙','☀️','🔷','🔶','💎','🏆','🎯','🔔','🌟'],
  // ✅ v2.7.1: بيانات المرشحين الحقيقيين (المرحلة 7)
  // ⚠️ أرقام المرشحين ثابتة — لا تتغير حتى لو في مرشح مستبعد (فجوة في الأرقام)
  // الهيكل: candidates[ballotId][sectionId] = [{number, name}]
  candidates: {
    // === ورقة 1: مقعد النقيب العام (universal) ===
    captain: {
      captain: [
        { number: 1,  name: 'عبدالستار غلاب عبدالمجيد محمد' },
        { number: 2,  name: 'ناصر احمد عبد الجواد رضوان' },
        { number: 3,  name: 'قطب عنتر قطب البربري' },
        { number: 4,  name: 'فيصل محمود عوض حسنين' },
        { number: 5,  name: 'عبداللطيف محمد مصطفى مسعود' },
        { number: 6,  name: 'ايمن فتحى حسين بطيشه' },
        { number: 7,  name: 'سامح فوزى محمد سالم' },
        { number: 8,  name: 'عصام صلاح مصطفي حسين' },
        { number: 9,  name: 'خالد صلاح الدين محمد المهدى' },
        { number: 10, name: 'عبدالله عبدالمنعم عبدالله سالم' },
        { number: 11, name: 'محمد عبدالغنى عبدالمطلب' },
        { number: 12, name: 'سامى فهمى مصطفى ترك' },
        { number: 13, name: 'صالح محمود صالح فرغلى' },
        { number: 14, name: 'شريف محمد صبرى محمود على الحلو' },
        { number: 15, name: 'حسام ابوالمعاطي الشرقاوي ابوالمعاطي' },
        { number: 16, name: 'شريف حسين محمد حسين مكاوى' },
        { number: 17, name: 'ابراهيم محمد عبدالعزيز احمد الحلواني' },
        { number: 18, name: 'الحسين احمد ابراهيم احمد' },
        { number: 19, name: 'هانى سيد محمد ضاحى' }
      ]
    },
    // === ورقة 4: مجلس الشعب الهندسية (universal per division) ===
    // الهيكل: general_division[divisionId][sectionId] = [{number, name}]
    // كبيرة (كهرباء/مدني/ميكانيكا/عمارة): 3 فوق السن + 5 تحت السن = 8
    // صغيرة (تعدين/كيمياء/غزل): 3 فوق السن + 3 تحت السن = 6
    general_division: {
      electrical: {
        senior: [
          { number: 1, name: 'مرفت علي محمد السلاموني' },{ number: 2, name: 'مبروك عبدالله عامر الشقيدي' },{ number: 3, name: 'جيهان عبدالجليل محمد عبدالدايم' },{ number: 4, name: 'اسلام احمد يوسف التراس' },{ number: 5, name: 'محمود محمد محمد شحاته حبيب' },{ number: 6, name: 'محمد محمد كمال الدين سليم حسن' },{ number: 7, name: 'عبدالرحمن حسن جابر سويلم' },{ number: 8, name: 'احمد حسن علي درويش' },{ number: 9, name: 'اشرف احمد محمد السيد نصير' },{ number: 10, name: 'منى بدير ابراهيم الزينى' },{ number: 11, name: 'مصطفى السيد فاضل الزلاط' },{ number: 12, name: 'محمد ماهر محمد عبدالحليم احمد' },{ number: 13, name: 'اسامه عبدالغفور احمد محمد' },{ number: 14, name: 'ممدوح عبد الغنى السيد بدوى' },{ number: 15, name: 'نهال جمال حسن محمد' },{ number: 16, name: 'هدي صابر حافظ السخاوي' },{ number: 17, name: 'محمد شلبى سويلم شلبى' },{ number: 18, name: 'حاتم عبدالحميد بسيونى عبدالحميد' },{ number: 19, name: 'محمد عبدالمنعم عبد المطلب سالم' },{ number: 20, name: 'سمير ابوالسعود عطيه السيد' },{ number: 21, name: 'مصطفى محمد حمدى عبدالحليم الشربينى' },{ number: 22, name: 'عمرو محمد نبيل السيد احمد عطاالله' },{ number: 23, name: 'خالد محمد خالد احمد' },{ number: 24, name: 'محمد شعبان عبدالامام سليم' },{ number: 25, name: 'احمد محمد احمد قشقوش' },{ number: 26, name: 'عيد محمد عيد غياض' },{ number: 27, name: 'كرم يوسف عازر جرجس' },{ number: 28, name: 'احمد محمد فؤاد محمد عبدالسلام' },{ number: 29, name: 'مجدي محمد عبدالله ابراهيم' },{ number: 30, name: 'أحمد عبد الحكيم عبد الرحمن محمود' },{ number: 31, name: 'فريال محمد خضيرى سليمان' },{ number: 32, name: 'وائل ماجد السيد بدوى' },{ number: 33, name: 'احمد محمد صلاح الدين محمود الشناوى' },{ number: 34, name: 'طارق امين معوض رضوان' },{ number: 35, name: 'سعودى احمد على محمد' },{ number: 36, name: 'منال صلاح الدين على الملا' },{ number: 37, name: 'عبد الغنى بدير عبدالغنى احمد' },{ number: 38, name: 'حسنين احمد حسنين زمرة' },{ number: 39, name: 'جمال علي عبدالسلام يونس' },{ number: 40, name: 'ماهر جرجس ابراهيم غبريال' },{ number: 41, name: 'محمد عبدالحميد عبدالحميد عبدالرحمن' },{ number: 42, name: 'ماجد محمود عبدالحميد ابوالعزم' },{ number: 43, name: 'دلال حسين مصطفى حلمى' },{ number: 44, name: 'حسن عبدالمحسن حسن محمد' },{ number: 45, name: 'احمد فؤاد محمد عبدالرازق على' },{ number: 46, name: 'نيفين نبيل ويصا بشاي' },{ number: 47, name: 'عيسي نسيم عيسي خله' },{ number: 48, name: 'اشرف رمضان عبداللطيف ابو العيش' },{ number: 49, name: 'زكريا السيد علي سالم' },{ number: 50, name: 'مجدى محمد سالم صقر' },{ number: 51, name: 'السيد ابوالعمايم احمد شبانة' },{ number: 52, name: 'محمد كمال احمد محمود' },{ number: 53, name: 'بيشوى بنيامين مرقس ابادير' },{ number: 54, name: 'فاروق على زكى الحكيم' },{ number: 55, name: 'ضياء ابراهيم محمد حافظ محمد زبادى' }
        ],
        junior: [
          { number: 1, name: 'ابراهيم محمد محمد محمود' },{ number: 2, name: 'حامد محمد حامد عبدالعال' },{ number: 3, name: 'احمد محمد عمر محمد هندى' },{ number: 4, name: 'سيد منصور ابوالفضل منوفى' },{ number: 5, name: 'محمد احمد ثروت حافظ امين' },{ number: 6, name: 'ايمان اسماعيل عبد الجواد محمد' },{ number: 7, name: 'محمد محمود ابراهيم صادق' },{ number: 8, name: 'محمد مجدى عبد الله محمد الشريف' },{ number: 9, name: 'محمود عزت محمد احمد القاضى' },{ number: 10, name: 'محمد احمد احمد مصطفى عوض عيادة' },{ number: 11, name: 'محمد عمر عبدالرحيم بيبرس' },{ number: 12, name: 'جميل محمد فؤاد كمال احمد حمدى الاهتم' },{ number: 13, name: 'الحسين احمد محمد محمود' },{ number: 14, name: 'محمد صفوت محمد حسنين زناتى' },{ number: 15, name: 'محمد خالد محمد خالد' },{ number: 16, name: 'محمد الحسين عبدالله خليل عسران' },{ number: 17, name: 'محمد عبدالحميد شديد البكل' },{ number: 18, name: 'على محمد ابوالعلا عبدالمؤمن' },{ number: 19, name: 'ايه عبدالرحمن انور على طاحون' },{ number: 20, name: 'احمد الطيب محمد جاد' },{ number: 21, name: 'محمد سمير حسين سالم خليل' },{ number: 22, name: 'ابانوب فيليب نجاتي يوسف' },{ number: 23, name: 'احمد ابراهيم عبدالمنعم النجار' },{ number: 24, name: 'محمد عادل عبدالرحيم خضر' },{ number: 25, name: 'هلا محمد عبدالجواد عبدالرحمن عباده' },{ number: 26, name: 'احمد شريف عبدالمنعم ابراهيم بدور' },{ number: 27, name: 'السيد محمد دسوقي بدوي' }
        ]
      },
      civil: {
        senior: [
          { number: 1, name: 'محمد الواضح ابوجبل محمد احمد' },{ number: 2, name: 'عبدالستار غلاب عبدالمجيد محمد' },{ number: 3, name: 'مينا نظمى لبيب عوض' },{ number: 4, name: 'علاء عوض احمد حسن' },{ number: 5, name: 'مصطفى محمد احمد احمد' },{ number: 6, name: 'ابراهيم على مرسى محمد' },{ number: 7, name: 'احمد محمد محمد فوده حشيش' },{ number: 8, name: 'هبه عادل عباس السيد ناصر' },{ number: 9, name: 'عمرو اسماعيل جودت محمد' },{ number: 10, name: 'احمد محمد حمدى ابراهيم حمدى' },{ number: 11, name: 'احمد صلاح الدين السيد البجلاتى' },{ number: 12, name: 'احمد علي حسن سلامة' },{ number: 13, name: 'احمد صبحى عوض السيد خليل' },{ number: 14, name: 'حسام طلعت احمد احمد جمعه' },{ number: 15, name: 'ايمن فتحى حسين بطيشه' },{ number: 16, name: 'عمرو محمد ابراهيم بيبرس' },{ number: 17, name: 'مايكل جرجس عدلى جرجس' },{ number: 18, name: 'محمد فاروق السعيد السيد' },{ number: 19, name: 'حسن يوسف رمضان صالح' },{ number: 20, name: 'رضا محمد محمد محمد شعبان' },{ number: 21, name: 'مصطفى محمد مصطفى محمد' },{ number: 22, name: 'رمضان سيد محمد احمد' },{ number: 23, name: 'ابراهيم محمد مختار وهبه' },{ number: 24, name: 'عمر محمد عبدالله زيدان' },{ number: 25, name: 'اسامه احمد اسماعيل محمود' },{ number: 26, name: 'حنان يوسف حسن السلامونى' },{ number: 27, name: 'طارق سامي حسن حنفي' },{ number: 28, name: 'حسام الدين عزت امين محمد' },{ number: 29, name: 'هشام الدين ابراهيم محمد عبد الخالق' },{ number: 30, name: 'على صبحى على احمد المصرى' },{ number: 31, name: 'حسن عيد حسن علي عليوه' },{ number: 32, name: 'احمد رجب فوزى عبدالسلام' },{ number: 33, name: 'احمد مصطفى احمد موسى' },{ number: 34, name: 'احمد شكرى محمد عطايا' },{ number: 35, name: 'احمد عبدالعال ابراهيم عبدالله' },{ number: 36, name: '��ادل موريس صهيون بخيت' },{ number: 37, name: 'محمد عزالدين صالح عمر' },{ number: 38, name: 'احمد محمد سمير محمد على الكاشف' },{ number: 39, name: 'محمود ابوالسعود مأمون محمد' },{ number: 40, name: 'خالد انور عابدين محمد' },{ number: 41, name: 'هالة محمد جمال الدين عبدالحافظ القاضى' },{ number: 42, name: 'رحاب محمد ابراهيم شتيوى' },{ number: 43, name: 'عادل توفيق سعد شحاتة' },{ number: 44, name: 'احمد حمدى حافظ سليم' },{ number: 45, name: 'سوزى كامل عبد الرحمن عوض' },{ number: 46, name: 'صلاح محمد زكي الزلاقي' },{ number: 47, name: 'على محمد سعد قضيب' },{ number: 48, name: 'خالد محمد توكل' },{ number: 49, name: 'محمد احمد محمد دردير' },{ number: 50, name: 'احمد حسن احمد محمد' },{ number: 51, name: 'وليد يوسف عبدالمقصود يوسف حسين' },{ number: 52, name: 'اشرف فكرى السيد شطا' },{ number: 53, name: 'مجاهد ابراهيم الدسوقى محمدالشختور' },{ number: 54, name: 'محمد مجدى الحسينى الدسوقى' },{ number: 55, name: 'شريف محمود احمد مسلم' },{ number: 56, name: 'علاء محمد الصافى سليمان' },{ number: 57, name: 'احمد صلاح محمد طه الحاذق' },{ number: 58, name: 'ضياء احمد عبدالفتاح عبدالحميد الكتبى' }
        ],
        junior: [
          { number: 1, name: 'زياد محمد شعبان ابو الحارث ابراهيم' },{ number: 2, name: 'علي جلال الدين علي حسنين' },{ number: 3, name: 'محمد امين الدين جوده احمد جوده' },{ number: 4, name: 'على اسماعيل محمد اسماعيل حسن' },{ number: 5, name: 'محمد السيد البدوى محمود حافظ' },{ number: 6, name: 'مجدى منصور عبدالصمد احمد' },{ number: 7, name: 'ايهاب نبيل سعد بلاط' },{ number: 8, name: 'احمد اسلام محمد السيد سليمان' },{ number: 9, name: 'احمد محمد محمود حميده عاشور' },{ number: 10, name: 'احمد سامى حسن احمد ابوالنجاه' },{ number: 11, name: 'نوران محمد حامد محمود الزريقي' },{ number: 12, name: 'محمد احمد سعيد عبد الماجد' },{ number: 13, name: 'فادى اسعد حسن البغيلى' },{ number: 14, name: 'عبدالرحمن عاطف السيد عبده الزرقاوى' },{ number: 15, name: 'احمد السيد عبده السيد مصطفى الشاهد' },{ number: 16, name: 'محمد محسن محمد الصعيدى' },{ number: 17, name: 'رشا احمد رشاد ابراهيم البنا' },{ number: 18, name: 'محمود جمال عبدالناصر صديق' },{ number: 19, name: 'محمد يسري على محمد الجيار' },{ number: 20, name: 'وائل نبيل حنا كيرلس' },{ number: 21, name: 'عمر عبداللاه عبدالحميد عبداللاه' },{ number: 22, name: 'محمود محمد عبدالمنعم عويس' },{ number: 23, name: 'يحيى طلعت عبدالعزيز مرسى' },{ number: 24, name: 'احمد عبدالرحيم عبدالحميد ابراهيم' },{ number: 25, name: 'ابانوب انطون عازر انطون' },{ number: 26, name: 'فتحى جمعه فتحى رمضان' },{ number: 27, name: 'ياسين سعد مصطفى محمد' },{ number: 28, name: 'عمر وجيه محمد توفيق العالم' },{ number: 29, name: 'احمد هاني عطا محمد ابوزيد' },{ number: 30, name: 'صموئيل عجيب يسرى شكر' },{ number: 31, name: 'محمد جمال سيد بيومى' },{ number: 32, name: 'باسم احمد محمد عبدالرازق' },{ number: 33, name: 'محمد محمود السيد السيد' },{ number: 34, name: 'انطونيوس جوزيف شحاته كيرلس' },{ number: 35, name: 'حسام عادل معوض عبدالعظيم' },{ number: 36, name: 'ابانوب عادل عزيز كراس' },{ number: 37, name: 'على محمد جمعة جودة' },{ number: 38, name: 'محمد احمد محمد ابوالنصر ابوالعينين' },{ number: 39, name: 'محمد عطيه السيد مصطفى فرج' },{ number: 40, name: 'احمد محمود محمود حسن شلبايه' },{ number: 41, name: 'عادل صبحى طه سيد' },{ number: 42, name: 'ساره مجدي محمود زيد علي' },{ number: 43, name: 'محمد احمد قرنى مرسى' },{ number: 44, name: 'على عادل على احمد' },{ number: 45, name: 'احمد محمد عبد الحليم عبدالبارى' },{ number: 46, name: 'محمد عبدالله عبدالسلام محمد' }
        ]
      },
      mechanical: {
        senior: [
          { number: 1, name: 'المعتزبالله محمد السيد بركات' },{ number: 2, name: 'نبيل لطفى أمين نزهى مينا' },{ number: 3, name: 'عمرو احمد العجمي الادهم' },{ number: 4, name: 'احمد محمد فرج عبدالبارى' },{ number: 5, name: 'بهاء محمد عبدالفتاح جريدة' },{ number: 6, name: 'حاتم مهدى عبدالتواب محمد' },{ number: 7, name: 'محمد حسن خليل الديب' },{ number: 8, name: 'عماد محمد محمود محمد' },{ number: 9, name: 'محمد مصطفى محمد منصور' },{ number: 10, name: 'غاده عماد فكرى بخيت' },{ number: 11, name: 'ياسر احمد مأمون عبدالكامل' },{ number: 12, name: 'شريف مصطفى مصطفى احمد' },{ number: 13, name: 'مجدى طه محمد السقا' },{ number: 14, name: 'محمد محمد على بشر' },{ number: 15, name: 'احمد الحسينى محمود عبدالعال' },{ number: 16, name: 'سعيد احمد محروس خالد' },{ number: 17, name: 'وهيب لبيب قرياقص' },{ number: 18, name: 'سمية محمد عبدالظاهر ابراهيم' },{ number: 19, name: 'مينا رأفت نجيب نصر' },{ number: 20, name: 'طارق محمد عبد السلام خضر' },{ number: 21, name: 'محمد السيد عبدالمجيد محمد' },{ number: 22, name: 'صالح محمود صالح فرغلى' },{ number: 23, name: 'محمد السعيد محمد السعيد حلقه' },{ number: 24, name: 'على محمد على محمد' },{ number: 25, name: 'محمد كمال جاد محمد كساب' },{ number: 26, name: 'فؤاد حلمى سليم عبدالرحمن' },{ number: 27, name: 'احمد رفاعى عطيه محمد' },{ number: 28, name: 'طارق محمد محمد عبدالنبي اسماعيل' },{ number: 29, name: 'مدحت عادل زكى بطرس' },{ number: 30, name: 'محمد عبدالمعبود احمد يونس' },{ number: 31, name: 'رضا عبدالسلام صابر محمد' },{ number: 32, name: 'حسام الدين حسين محمد سيد احمد' },{ number: 33, name: 'ابراهيم سعد عبدربه احمد' },{ number: 34, name: 'احمد محمد بدر الدين احمد' },{ number: 35, name: 'مصطفى احمد ابراهيم الشيمى' },{ number: 36, name: 'سمير منير اديب منقريوس' },{ number: 37, name: 'محمد محمود عبده الخولى' },{ number: 38, name: 'محمد رفاعي صابر غنيم' },{ number: 39, name: 'حاتم خديوى حسين اسماعيل' },{ number: 40, name: 'ايمن محمد حسن حسين' }
        ],
        junior: [
          { number: 1, name: 'احمد مصطفى حسين عبدالناصر' },{ number: 2, name: 'اسامة حسن حسن السيد معوض' },{ number: 3, name: 'محمود هشام محمد ابراهيم على العربى' },{ number: 4, name: 'كريم محمد عبد الحميد ابراهيم محمد الكسار' },{ number: 5, name: 'محمد رضا بسيونى عصر' },{ number: 6, name: 'هيثم اشرف يوسف ابراهيم يوسف' },{ number: 7, name: 'احمد محمد صبرى حماده على يوسف' },{ number: 8, name: 'احمد طلعت محمد حسين احمد' },{ number: 9, name: 'محمد يوسف يوسف منصور مقلد' },{ number: 10, name: 'جوزيف نبيل عبدالله برسوم' },{ number: 11, name: 'عبدالله صالح محمود صالح' },{ number: 12, name: 'محمود جمال خنيزى عبدالسيد' },{ number: 13, name: 'السيد عادل السيد محمد الفوى' },{ number: 14, name: 'احمد محمد سيد محمد' },{ number: 15, name: 'عبدالرحمن ماهر محمد درويش عوض' },{ number: 16, name: 'محمد مصطفى كامل على' },{ number: 17, name: 'محمد احمد محمد ابراهيم على' },{ number: 18, name: 'محمد السيد على محمد حسين' },{ number: 19, name: 'محمد محمد محمد يوسف طيره' },{ number: 20, name: 'اكثم محمد عبدالسلام احمد يوسف' },{ number: 21, name: 'مهاب احمد عبدالموجود ابوالمعاطي' },{ number: 22, name: 'محمد جمال عبدالحميد ابراهيم شمردل' },{ number: 23, name: 'طاهر ابوزيد احمد ابوزيد' },{ number: 24, name: 'نور الدمرداش رشاد عوض الله' }
        ]
      },
      architecture: {
        senior: [
          { number: 1, name: 'محمود السيد العربى احمد بكر' },{ number: 2, name: 'نهى احمد محمد عبدالعال' },{ number: 3, name: 'حسناء محمد العياش سنوسى محمد' },{ number: 4, name: 'ياسر محمد صلاح الدين محمود المغربى' },{ number: 5, name: 'شيماء سعيد عبدالرحمن محمد درويش' },{ number: 6, name: 'سعد مكرم سعد عوض الله يوسف' },{ number: 7, name: 'يحيي محمد الزينى طه حجازى' },{ number: 8, name: 'هبه محروس على عبدالعال' },{ number: 9, name: 'سمير محمد محمد حماد' },{ number: 10, name: 'محمد انور جابر احمد' },{ number: 11, name: 'نيرفانا اسامة حنفى محمود' },{ number: 12, name: 'خالد محمد عزمى حسنين' },{ number: 13, name: 'ياسر محمد ذكي ابوالفتوح' },{ number: 14, name: 'اكرام عبدالعزيز علي احمد' },{ number: 15, name: 'سونيا شرف الدين عرابى' },{ number: 16, name: 'هبة عصام صفى الدين احمدصفى الدين' },{ number: 17, name: 'محمد العيداروس اسماعيل اسماعيل محمد' },{ number: 18, name: 'ياسر محمد السيد ابراهيم' },{ number: 19, name: 'ايمان محمد محمد عسل' },{ number: 20, name: 'محمود بهاء الدين عبد التواب جاد' },{ number: 21, name: 'تامر محمد احمد مصطفى' },{ number: 22, name: 'على حسين احمد على حسين' },{ number: 23, name: 'مياده محمد فتحى احمد السيد متولى' },{ number: 24, name: 'احمد محمود عبد الستار محمود' },{ number: 25, name: 'زكريا ابراهيم الحسينى راجح' },{ number: 26, name: 'محمد سعيد سلام احمد' }
        ],
        junior: [
          { number: 1, name: 'محمد فريد محمد عبدالعزيز' },{ number: 2, name: 'هانى احمد صابر احمد راشد' },{ number: 3, name: 'ضياءالدين محمود محمد عبدالمنعم' },{ number: 4, name: 'رضا عبدالمنعم محمد ابراهيم' },{ number: 5, name: 'وائل ابراهيم شريف على' },{ number: 6, name: 'تامر محمود عبدالعزيز محمد' },{ number: 7, name: 'شريف جوده محمد السيد عليوه' },{ number: 8, name: 'محمود محمد سيد احمد شرف' },{ number: 9, name: 'حسام صلاح محمد محمد' },{ number: 10, name: 'احمد حمدى عبدالقادر محروس' },{ number: 11, name: 'منه الله مؤمن فوزى عبداللطيف' },{ number: 12, name: 'السيد عثمان على عثمان وربى' },{ number: 13, name: 'ايمان ابو بكر احمد على العونى' },{ number: 14, name: 'محمود عاطف السيد محمود' },{ number: 15, name: 'ديفيد ناصر جيد ابتناغو' },{ number: 16, name: 'فيروز محمد حسن عبدالجليل احمد' },{ number: 17, name: 'محمد علاء الدين فاروق زكى السيد' },{ number: 18, name: 'محمد احمد محمود عواد غانم' },{ number: 19, name: 'عبد الرحمن محمد ابراهيم يوسف' },{ number: 20, name: 'محمود محمد صفوت حسن صفوت' },{ number: 21, name: 'محمود سليمان رضوان احمد محمد البتانونى' },{ number: 22, name: 'نور سامح محمد عبداللطيف ابويوسف' },{ number: 23, name: 'محمد عادل عبدالعظيم حجازى' },{ number: 24, name: 'ابراهيم جمال محمد على' },{ number: 25, name: 'افنان محمد على التمامى' },{ number: 26, name: 'يوسف محمد محمود محمد عاشور' },{ number: 27, name: 'ايمان حسان سيد كامل' },{ number: 28, name: 'محمد اشرف عبدالعزيز محمد احمد الحمامصى' },{ number: 29, name: 'الاء محمد عبدالفتاح قمر' }
        ]
      },
      chemical: {
        senior: [
          { number: 1, name: 'حسام الدين عطفت فوزى' },{ number: 2, name: 'موهاب محمد برعى نصر' },{ number: 3, name: 'رشا رضا امام حسين' },{ number: 4, name: 'محمد رمضان محمد علي' },{ number: 5, name: 'احمد مختار اسماعيل احمد' },{ number: 6, name: 'نشوه عزت مصطفى احمد سلامه' },{ number: 7, name: 'علاء محمود انور علي' },{ number: 8, name: 'خالد محمد محمد موسى' },{ number: 9, name: 'عماد نظمى على حسن' },{ number: 10, name: 'محمد عبدالباسط عبدالرحيم محمد' },{ number: 11, name: 'ريهام عادل محمد شحاته مصطفى' },{ number: 12, name: 'احمد عبدالرحمن محمد بدر' }
        ],
        junior: [
          { number: 1, name: 'البدراوى حماد محمد حماد' },{ number: 2, name: 'محمد اسماعيل ابراهيم عليوه' },{ number: 3, name: 'مروة محمد طه على' },{ number: 4, name: 'احمد جمال غالب حفنى' },{ number: 5, name: 'احمد سمير احمد احمد العطار' },{ number: 6, name: 'احمد عبدالرحمن احمد عبدالهادى الرمسيسى' }
        ]
      },
      textile: {
        senior: [
          { number: 1, name: 'اسامه علي محمد علي القصاص' },{ number: 2, name: 'محسن حسين محمد محمد شاهين' },{ number: 3, name: 'احمد محمد مصطفى محمد' },{ number: 4, name: 'وائل فوزي السيد مرسي' },{ number: 5, name: 'كمال حمدى عبدالفتاح احمد عطية' },{ number: 6, name: 'احمد حلمى عبدالرحيم احمد الشيخ' },{ number: 7, name: 'محمد محروس محمد ابراهيم' },{ number: 8, name: 'عمرو عبدالمنعم حسن السيد' },{ number: 9, name: 'يحيى السي�� ابراهيم الطنبارى' },{ number: 10, name: 'السيد محمد سيد احمد مصطفى' },{ number: 11, name: 'علاء عبدالحليم سليمان ريحان' },{ number: 12, name: 'رضا محمد محمود السيد احمد نوير' }
        ],
        junior: [
          { number: 1, name: 'احمد محمود ابراهيم عيسى' },{ number: 2, name: 'اميره عبدالكريم عبدالبارى عبيد' },{ number: 3, name: 'سليمان رمضان سليمان بركات' },{ number: 4, name: 'اسماء عصمت محمد فؤاد احمد حسن' },{ number: 5, name: 'اسلام محمد عبده محمود حجي' },{ number: 6, name: 'الشيماء اشرف عبدالفتاح سعيد' },{ number: 7, name: 'محمود احمد عبدالله حافظ' },{ number: 8, name: 'محمد صبحى احمد محمد' }
        ]
      },
      petroleum: {
        senior: [
          { number: 1, name: 'حمادة تغيان حسين مرسى' },{ number: 2, name: 'د.احمد محمد ابوالسعود عبدالرحمن' },{ number: 3, name: 'معتز احمد مختار محمد رشاد المحتحت' },{ number: 4, name: 'ناجح عبدالحليم عبده محمد' },{ number: 5, name: 'سمير ابراهيم حسن زايد' },{ number: 6, name: 'احمد محمد رشدى سعد عبد اللطيف' },{ number: 7, name: 'علاء محمد زيدان محمد' },{ number: 8, name: 'احمد حسين على محمد' },{ number: 9, name: 'رائد محمد المـحمدى ابراهيم' },{ number: 10, name: 'احمد عبده عباس السيد' },{ number: 11, name: 'عادل محمد سالم رجب' },{ number: 12, name: 'رحاب معتصم نصر المغربى' },{ number: 13, name: 'عمر شحاته عبدالله محمد' },{ number: 14, name: 'صفوت محمد حفني علي' },{ number: 15, name: 'حمدى احمد محمد نور' },{ number: 16, name: 'محمد صبرى السيد التراس' },{ number: 17, name: 'عبدالخالق سيد عبدالخالق جمعه' }
        ],
        junior: [
          { number: 1, name: 'رانا جمال محمد عيد' },{ number: 2, name: 'محمد عطيه عبدالتواب عطيه عبدالرحمن' },{ number: 3, name: 'احمد سعيد عطية العزازى' },{ number: 4, name: 'احمد صلاح محمد احمد' },{ number: 5, name: 'محمد صلاح بيومى سيد احمد' },{ number: 6, name: 'شعبان فتحى شافعى عبدالوارث' },{ number: 7, name: 'مصطفى عبدالحميد حماده احمد' },{ number: 8, name: 'احمد علاء الدين ابراهيم مرسال' },{ number: 9, name: 'عمر محمد محمد الخراشى' },{ number: 10, name: 'مسعود خالد جمال عيد' },{ number: 11, name: 'جمال عبد الباقى الشوادفى' },{ number: 12, name: 'بلال محمد محمود حسن الحضرى' }
        ]
      }
    },
    // === ورقة 3: رئيس النقابة الفرعية (perCommittee) ===
    // الهيكل: sub_captain[committeeId].sub_cap = [{number, name}]
    sub_captain: {
      cairo: { sub_cap: [
        { number: 1, name: 'سمير محمد محمد حماد' },{ number: 2, name: 'فيصل محمود عوض حسنين' },{ number: 3, name: 'ايمن فتحى حسين بطيشه' },{ number: 4, name: 'يحيي محمد الزينى طه حجازى' },{ number: 5, name: 'عبدالعزيز حسب الله محمد الكفراوى' },{ number: 6, name: 'احمد صلاح الدين احمد عكاشه الدالى' },{ number: 7, name: 'طارق سامي حسن حنفي' },{ number: 8, name: 'شريف محمد صبرى محمود على الحلو' },{ number: 9, name: 'على محمد على محمد' },{ number: 10, name: 'احمد محمد سمير محمد على الكاشف' },{ number: 11, name: 'مظفرالدين محمد مصطفي السبكي' },{ number: 12, name: 'طه محمد طه ابراهيم' },{ number: 13, name: 'هشام محمود محمد ابو سنه' },{ number: 14, name: 'بيشوى بنيامين مرقس ابادير' },{ number: 15, name: 'احمد محمد فرج عبدالبارى' }
      ]},
      giza: { sub_cap: [
        { number: 1, name: 'عبدالستار غلاب عبدالمجيد محمد' },{ number: 2, name: 'ممدوح عبد الغنى السيد بدوى' },{ number: 3, name: 'محمد مصطفى محمد الفحام' },{ number: 4, name: 'ابراهيم محمد ابراهيم سراج الدين' },{ number: 5, name: 'سامح سيد سعد محمد الغزولى' },{ number: 6, name: 'ايهاب محمد الهادى محمد جوده' },{ number: 7, name: 'عزت انور سليمان' },{ number: 8, name: 'سمير احمد ابو الفتوح على' },{ number: 9, name: 'عبد الغنى بدير عبدالغنى احمد' },{ number: 10, name: 'على حسين احمد على حسين' },{ number: 11, name: 'علي عبدالعزيز احمد علي' }
      ]},
      alexandria: { sub_cap: [
        { number: 1, name: 'محمد هشام سعودى كامل' },{ number: 2, name: 'علاء الدين محجوب خضر محمد' }
      ]},
      qalyubia: { sub_cap: [
        { number: 1, name: 'تامر رمضان عبدالله عبدالفتاح' },{ number: 2, name: 'محمد سراج الدين محمد قاسم الملطاوى' },{ number: 3, name: 'عمرو ابراهيم حفناوي مدبولي' },{ number: 4, name: 'احمد محمد محمود محروس' }
      ]},
      sharqia: { sub_cap: [
        { number: 1, name: 'تامر سامي اسماعيل جعفر' },{ number: 2, name: 'موهاب محمد برعى نصر' },{ number: 3, name: 'سامح فوزى محمد سالم' },{ number: 4, name: 'عبد الفتاح جابر علي الباز' }
      ]},
      dakahlia: { sub_cap: [
        { number: 1, name: 'رضا محمد الحسينى الشافعى' },{ number: 2, name: 'سلوي السعيد سعد اسماعيل' },{ number: 3, name: 'تامر محمد احمد مصطفى' },{ number: 4, name: 'ولاء عبدالمنعم السيد محمد' },{ number: 5, name: 'عبد الناصر عبد الفتاح علي جمعة' }
      ]},
      beheira: { sub_cap: [
        { number: 1, name: 'حمدى عبدالسلام الحسينى الخولى' },{ number: 2, name: 'سعد صلاح محمد سعد' },{ number: 3, name: 'كريمه محمد عبدالمجيد عاشور' }
      ]},
      monufia: { sub_cap: [
        { number: 1, name: 'اشرف عبد المنعم اسماعيل فرحان' },{ number: 2, name: 'محمد حمدى مصطفى الجبالى' },{ number: 3, name: 'احمد السيد عابد ابو الروس' },{ number: 4, name: 'علاء علي عبدالغني بشندي' }
      ]},
      gharbia: { sub_cap: [
        { number: 1, name: 'تامر مصطفي محمد الكوراني' },{ number: 2, name: 'احمد اللاشى السيد العشرى' },{ number: 3, name: 'حسام طلعت احمد احمد جمعة' }
      ]},
      kafr_elsheikh: { sub_cap: [
        { number: 1, name: 'محمد محمود ربيع حجاج' },{ number: 2, name: 'محمد حموده محمد فتح الله' },{ number: 3, name: 'محمد محمد حسن النواصره' }
      ]},
      damietta: { sub_cap: [
        { number: 1, name: 'شريف احيد كامل الدسوقي' },{ number: 2, name: 'د. ابراهيم عبدالغفار محمد بدران' },{ number: 3, name: 'زكريا ابراهيم الحسيني راجح' }
      ]},
      portsaid: { sub_cap: [
        { number: 1, name: 'رمضان على احمد عبد العال' },{ number: 2, name: 'محمد احمد السيد الجوهرى' },{ number: 3, name: 'عماد اسحق عزيز مكسيموس' }
      ]},
      ismailia: { sub_cap: [
        { number: 1, name: 'وليد احمد فؤاد محمد' },{ number: 2, name: 'محمد عبدالرحمن سليمان' },{ number: 3, name: 'اسامة عبدالعزيز على ابو زيد' },{ number: 4, name: 'احمد ابراهيم السيد محمد مكاوى' },{ number: 5, name: 'حسام كمال الدين حسانين بدران' },{ number: 6, name: 'السيد بدرالدين احمد محمد' }
      ]},
      suez: { sub_cap: [
        { number: 1, name: 'حافظ محمد عوض محمد' },{ number: 2, name: 'تامر محمود محمد حسن' }
      ]},
      north_sinai: { sub_cap: [
        { number: 1, name: 'عبد القادر سلمي محمد' },{ number: 2, name: 'على حسين العبد حسين ابواقرع' },{ number: 3, name: 'امين الدين جودة احمد جودة' }
      ]},
      fayoum: { sub_cap: [
        { number: 1, name: 'سعيد محمود محمد عبدربه عبدالعال' },{ number: 2, name: 'اسلام محمد جيوشى عبدالغفار' },{ number: 3, name: 'هشام والي خالد مؤمن' },{ number: 4, name: 'محمد احمد خير الله' }
      ]},
      benisuef: { sub_cap: [
        { number: 1, name: 'ابراهيم زارع محمود حسن بيومى' },{ number: 2, name: 'محمد عيسي سعد زهران' }
      ]},
      minya: { sub_cap: [
        { number: 1, name: 'د.احمد البدوى سيد عبد المنعم' },{ number: 2, name: 'حسين سعد ابراهيم وحيد' },{ number: 3, name: 'محمد مفتاح عطية ميهوب' },{ number: 4, name: 'اسامة محمد محمد احمد' },{ number: 5, name: 'منصورعبدالرسول محمد يعقوب' }
      ]},
      assiut: { sub_cap: [
        { number: 1, name: 'الهيثم عبدالحميد نصر عبدالله' },{ number: 2, name: 'ابوالعيون عرفات تونى حمدان' }
      ]},
      sohag: { sub_cap: [
        { number: 1, name: 'رمضان شعبان رضوان مهران' },{ number: 2, name: 'ياسر شعيب فراج حسين' },{ number: 3, name: 'ايمن محمد حسن حسين' },{ number: 4, name: 'فريـال محمد خضيرى سليمان' },{ number: 5, name: 'علي عبدالساتر علي عبدالعال' },{ number: 6, name: 'فتحي محمد احمد قاسم' }
      ]},
      qena: { sub_cap: [
        { number: 1, name: 'محمود محمد ابوزيد خليل' },{ number: 2, name: 'احمد عبدالمنعم عباس عاشور' },{ number: 3, name: 'احمد محمد الديب احمد' },{ number: 4, name: 'اشرف صلاح المشهور نور الدين' }
      ]},
      luxor: { sub_cap: [
        { number: 1, name: 'اسعد مصطفي احمد محمد' },{ number: 2, name: 'محمد علي محفوظ محمد' },{ number: 3, name: 'خالد السايح عطا السايح' },{ number: 4, name: 'مجدى خالد صادق خالد' }
      ]},
      aswan: { sub_cap: [
        { number: 1, name: 'محمد محمود عرابي خليل' },{ number: 2, name: 'كمال الدين حسين مصطفى الصادق' },{ number: 3, name: 'خالد سعيد محمد سعيد' },{ number: 4, name: 'عماد حمدي محمد فتح الله' }
      ]},
      redsea: { sub_cap: [
        { number: 1, name: 'حسنى منصور على محمد' },{ number: 2, name: 'احمد ابراهيم محمد احمد' },{ number: 3, name: 'احمد شعبان حامد محمد' },{ number: 4, name: 'محمود محمد احمد المصري' }
      ]},
      newvalley: { sub_cap: [
        { number: 1, name: 'ياسر عمر محمد بخيت' },{ number: 2, name: 'عادل عمر محمد ابراهيم' },{ number: 3, name: 'محمد عزالدين صالح عمر' }
      ]},
      matrouh: { sub_cap: [
        { number: 1, name: 'خالد عبدالله عيسى محجوب' },{ number: 2, name: 'احمد مصطفى يس سليمان' }
      ]}
    },
    // === ورقة 5: مجلس شعبة النقابة الفرعية (perCommittee) ===
    // الهيكل: sub_board.seatConfig[committeeId] = { sectionId: seats }
    // المرشحين: sub_board[committeeId][sectionId] = [{number, name}]
    sub_board: {
      seatConfig: { "cairo":{ "s_elec":3, "s_mech":1, "s_civil":2, "s_arch":1 }, "giza":{ "s_elec":3, "s_civil":2, "s_arch":1, "s_combined":1 }, "alexandria":{ "s_elec":1, "s_mech":3, "s_civil":2, "s_chem":1 }, "qalyubia":{ "s_elec":4, "s_mech":1, "s_civil":2 }, "sharqia":{ "s_elec":2, "s_mech":1, "s_civil":2, "s_arch":1, "s_combined":1 }, "dakahlia":{ "s_mech":2, "s_civil":4, "s_arch":1 }, "beheira":{ "s_elec":3, "s_mech":1, "s_civil":3 }, "monufia":{ "s_elec":1, "s_mech":2, "s_civil":2, "s_arch":1, "s_combined":1 }, "gharbia":{ "s_elec":3, "s_civil":2, "s_arch":1, "s_combined":1 }, "kafr_elsheikh":{ "s_elec":1, "s_civil":5, "s_arch":1 }, "damietta":{ "s_elec":2, "s_mech":1, "s_civil":3, "s_combined":1 }, "portsaid":{ "s_elec":2, "s_mech":2, "s_civil":1, "s_arch":1, "s_combined":1 }, "ismailia":{ "s_elec":2, "s_mech":2, "s_civil":2, "s_arch":1 }, "suez":{ "s_elec":2, "s_mech":1, "s_civil":2, "s_petr":2 }, "north_sinai":{ "s_elec":1, "s_mech":1, "s_civil":4, "s_combined":1 }, "fayoum":{ "s_elec":2, "s_civil":3, "s_arch":1, "s_combined":1 }, "benisuef":{ "s_elec":1, "s_civil":5, "s_arch":1 }, "minya":{ "s_elec":1, "s_civil":3, "s_arch":2, "s_combined":1 }, "assiut":{ "s_elec":3, "s_civil":2, "s_arch":2 }, "sohag":{ "s_elec":1, "s_mech":2, "s_civil":2, "s_arch":1, "s_combined":1 }, "qena":{ "s_elec":3, "s_civil":4 }, "luxor":{ "s_elec":3, "s_civil":2, "s_arch":1, "s_combined":1 }, "aswan":{ "s_elec":4, "s_mech":1, "s_civil":2 }, "redsea":{ "s_elec":4, "s_mech":3, "s_civil":4, "s_arch":1, "s_combined_cg":1, "s_petr":1 }, "newvalley":{ "s_elec":1, "s_mech":1, "s_civil":3, "s_arch":1, "s_combined":1 }, "matrouh":{ "s_elec":2, "s_mech":1, "s_civil":3, "s_arch":1 } },
      sectionNames: {
        s_elec: 'شعبة كهرباء',
        s_mech: 'شعبة ميكانيكا',
        s_civil: 'شعبة مدني',
        s_arch: 'شعبة عمارة',
        s_chem: 'شعبة كيميائية ونووية',
        s_petr: 'شعبة تعدين وبترول وفلزات',
        s_combined: 'الشعب الهندسية (كيميائية ونووية - غزل ونسيج - تعدين وبترول وفلزات)',
        s_combined_cg: 'الشعب الهندسية (كيميائية ونووية - غزل ونسيج)'
      },
      tazkia: {
        redsea: {
          s_combined_cg: { number: 1, name: 'نانسى السيد محمد عمر' },
          s_petr: { number: 1, name: 'خالد العبد جاد رسلان' }
        },
        newvalley: {
          s_mech: { number: 1, name: 'محمد مجدى على الشوربجى' },
          s_combined: { number: 1, name: 'مروه عادل محمد عبدالناصح' }
        },
        matrouh: {
          s_mech: { number: 1, name: 'نهال المتولى ابراهيم هجرس' }
        }
      },
      aswan: {
        s_elec: [
          { number: 1, name: 'يوسف شعبان محمد عاشور' },{ number: 2, name: 'منى محمد جلال عبدالعاطى' },{ number: 3, name: 'حبيبه داود محمد فتح الدين' },{ number: 4, name: 'سمر محمد يوسف مكى' },{ number: 5, name: 'ارميا نبيه راسم' },{ number: 6, name: 'صبري محروس حبشي عطاالله' },{ number: 7, name: 'الحسين احمد ابراهيم احمد' },{ number: 8, name: 'محمد زكريا مصطفي عبد الواحد' },{ number: 9, name: 'عماد حمدي محمد فتح الله' },{ number: 10, name: 'احمد صابر حسيب عبدالقادر' },{ number: 11, name: 'ميرغني عبدالمنعم محمد' }
        ],
        s_mech: [
          { number: 1, name: 'على محى الدين احمد محمد' },{ number: 2, name: 'احمد عبدالفتاح حسين عمر' }
        ],
        s_civil: [
          { number: 1, name: 'احمد عبدالحليم عواض بحر عبدالحليم' },{ number: 2, name: 'محمود ربيعى عبده حسن' },{ number: 3, name: 'اشرف فتحى احمد حسن' },{ number: 4, name: 'حمدى صبرى فكرى على' },{ number: 5, name: 'فيصل احمد عبدالقادر احمد' },{ number: 6, name: 'محمود محمد عزت عبدالوارث عثمان' },{ number: 7, name: 'ايرين فايز بقطر طانيوس' }
        ]
      },
      assiut: {
        s_elec: [
          { number: 1, name: 'احمد محمد احمد عبدالعال' },{ number: 2, name: 'مرفت زوزو مترى بشاى' },{ number: 3, name: 'وائل محمد احمد محمد خليل' },{ number: 4, name: 'خالد محمد خالد احمد' },{ number: 5, name: 'احمد محمد خليل حسن' },{ number: 6, name: 'هاني ثروت امين ابادير' },{ number: 7, name: 'منى مرسى سيد مرسى' }
        ],
        s_civil: [
          { number: 1, name: 'حازم حسن عبدالرحمن جاد المولى' },{ number: 2, name: 'عبدالله فتحى هشام خضر' },{ number: 3, name: 'يحيى طلعت عبدالعزيز مرسى' },{ number: 4, name: 'وفاء احمد سيد عبدالرحمن' },{ number: 5, name: 'احمد كمال ثابت احمد' },{ number: 6, name: 'هشام عبدالنبى عبدالرازق بخيت' },{ number: 7, name: 'مروة خليل نجيب على' }
        ],
        s_arch: [
          { number: 1, name: 'جمال سيد على عطا الله' },{ number: 2, name: 'حسن حسن خلف حسن' },{ number: 3, name: 'امل عبدالوارث محمد عبدالوارث' },{ number: 4, name: 'محمد انور جابر احمد' }
        ]
      },
      alexandria: {
        s_elec: [
          { number: 1, name: 'محمد صلاح السيد محمود عبدالفتاح' },{ number: 2, name: 'احمد محمد فؤاد محمد عبدالسلام' },{ number: 3, name: 'احمد محمد صلاح الدين محمود الشناوى' },{ number: 4, name: 'امير يوسف خليل اسكندر يوسف' }
        ],
        s_mech: [
          { number: 1, name: 'مصطفي محمد السيد حسن الحضري' },{ number: 2, name: 'محمد سعيد حسن على حسن' },{ number: 3, name: 'احمد محمود عبدالله حسن' },{ number: 4, name: 'احمد محمود جمال الدين محمد برهان الدين حماد' },{ number: 5, name: 'ايمان حلمى عبدالعزيز عماره' },{ number: 6, name: 'محمد حفنى حسين ابراهيم' }
        ],
        s_civil: [
          { number: 1, name: 'محمد قبيصى محمد على سعيد' },{ number: 2, name: 'رضا محمد محمد محمد شعبان' },{ number: 3, name: 'كريم محمد محمد القصبى' },{ number: 4, name: 'علاء محمد الصافى سليمان' }
        ],
        s_chem: [
          { number: 1, name: 'كريم حسن احمد محمد عزت' },{ number: 2, name: 'نهله سليمان محمد عبده زايد' },{ number: 3, name: 'احمد سمير احمد احمد العطار' },{ number: 4, name: 'هاني خالد محمد حسن كحيل' }
        ]
      },
      ismailia: {
        s_elec: [
          { number: 1, name: 'احمد محمد رمزى زكى عبدالوهاب' },{ number: 2, name: 'ياسر عبد الرحمن على هاشم' },{ number: 3, name: 'محمد احمد احمد مصطفى عوض عيادة' },{ number: 4, name: 'علاء رمضان اسماعيل يوسف' },{ number: 5, name: 'غادة محمد طه مرسى البنا' },{ number: 6, name: 'رضا ادريس حسن السيد' },{ number: 7, name: 'زياد ايهاب هاشم برعى محمد' }
        ],
        s_mech: [
          { number: 1, name: 'السيد عبد الله محمد عبد القادر' },{ number: 2, name: 'محمد قاسم عبد الفتاح ابراهيم' },{ number: 3, name: 'رجب بشاري عباس حسن' },{ number: 4, name: 'وهيب لبيب قرياقص' },{ number: 5, name: 'حاتم الحسين نصر ابوالمعاطى' },{ number: 6, name: 'اسماعيل احمد عبدالرحيم خليل' },{ number: 7, name: 'احمد رفاعى عطيه محمد' },{ number: 8, name: 'حسام الدين حسين محمد سيد احمد' },{ number: 9, name: 'محمد السيد على محمد حسين' },{ number: 10, name: 'شريف سيد احمد سالم' }
        ],
        s_civil: [
          { number: 1, name: 'احمد محمد اسماعيل السيد' },{ number: 2, name: 'شريف عماد الدين سيد على' },{ number: 3, name: 'محمد اسامه محمد محمد ابوالعلا' },{ number: 4, name: 'ابراهيم محمد مختار وهبه' },{ number: 5, name: 'احمد عبدالرحيم عبدالحميد ابراهيم' },{ number: 6, name: 'عبدالرحمن احمد هارون عبداللطيف' },{ number: 7, name: 'هشام محمد عليوه وهيبى' }
        ],
        s_arch: [
          { number: 1, name: 'شروق حسن شحاتة محمد سعد الدين' },{ number: 2, name: 'سيد ابراهيم الدسوقى محمد حجازى' },{ number: 3, name: 'عمرو احمد محمد حلمي عمر' },{ number: 4, name: 'عبدالرحيم على حفنى على' },{ number: 5, name: 'نوران وائل محمد سامى عبدالصادق' },{ number: 6, name: 'حسام طلبه عبدالباقى عبدالدايم' }
        ]
      },
      luxor: {
        s_elec: [
          { number: 1, name: 'فاطمه الزهراء محمود لبيب احمد' },{ number: 2, name: 'ابودوح محمود ابودوح محمد' },{ number: 3, name: 'وائل عبداللاهى محمد احمد' },{ number: 4, name: 'سيد احمد احمد فهمى سيد' },{ number: 5, name: 'عمرو حجاجي ابو الوفا سليمان' }
        ],
        s_civil: [
          { number: 1, name: 'عمر المهدى ادريس سعيد' },{ number: 2, name: 'الطاهر يوسف عبدالحميد طاهر' },{ number: 3, name: 'ابراهيم عبدالفتاح احمد يوسف' },{ number: 4, name: 'محمود بدوى فراج بدوى' }
        ],
        s_arch: [
          { number: 1, name: 'احمد حسين عبدالعاطى حسين' },{ number: 2, name: 'محمود بهاء الدين عبد التواب جاد' },{ number: 3, name: 'عبدالدايم احمد عبدالدايم سيد' }
        ],
        s_combined: [
          { number: 1, name: 'احمد ابودوح عطيه ابو الوفا' },{ number: 2, name: 'عماد الضوى محمد ابو المجد' },{ number: 3, name: 'احمد عبده عباس السيد' }
        ]
      },
      redsea: {
        s_elec: [
          { number: 1, name: 'محمد ابراهيم مبارك ابراهيم' },{ number: 2, name: 'نهي عبدالغفار عبدالعزيز سعود' },{ number: 3, name: 'عبدالله الحسن مصطفي حسين' },{ number: 4, name: 'مصطفي حسين علي محمد' },{ number: 5, name: 'سعيد مغربى محمد درويش' }
        ],
        s_mech: [
          { number: 1, name: 'احمد محمد محى الدين احمد' },{ number: 2, name: 'مينا مجدى سلامه سركيس' },{ number: 3, name: 'يوسف محمد دمرانى نصر' },{ number: 4, name: 'احمد السيد احمد حسن ابو الغيط' }
        ],
        s_civil: [
          { number: 1, name: 'جرجس ملاك فرج مجلي بقطر' },{ number: 2, name: 'محمد منتصر ابراهيم احمد' },{ number: 3, name: 'محمد احمد محمد اسماعيل' },{ number: 4, name: 'جيهان شعبان سالم جمعة' },{ number: 5, name: 'مصطفى محمد نجيب سيد احمد ابراهيم' },{ number: 6, name: 'احمد محمد سيد محمود' }
        ],
        s_arch: [
          { number: 1, name: 'محمد محمود الراوى اسماعيل' },{ number: 2, name: 'جورج نادر وهيب' }
        ],
        s_combined_cg: [
          { number: 1, name: 'نانسى السيد محمد عمر' }
        ],
        s_petr: [
          { number: 1, name: 'خالد العبد جاد رسلان' }
        ]
      },
      beheira: {
        s_elec: [
          { number: 1, name: 'ايمن محمد السيد رزق' },{ number: 2, name: 'طاهر محمد اسامة احمد رفاعى' },{ number: 3, name: 'احمد شعبان محمد خضر' },{ number: 4, name: 'احمد جميل محمد خليل' },{ number: 5, name: 'ياسر سعيد عبدالسلام عبدالله' },{ number: 6, name: 'على حسن حسن العنتبلى' }
        ],
        s_mech: [
          { number: 1, name: 'محمود رجب ابراهيم مرسى عبدالنبى' },{ number: 2, name: 'احمد نبيل عبدالعزيز الوسيمى' }
        ],
        s_civil: [
          { number: 1, name: 'احمد سامى حسن احمد ابوالنجاه' },{ number: 2, name: 'احمد علي حسن سلامة' },{ number: 3, name: 'محمد اشرف محمد الرومى' },{ number: 4, name: 'تامر عبداللطيف عبدالجواد مصباح' },{ number: 5, name: 'كمال محمد عبده سرور البنا' },{ number: 6, name: 'نشوى محمد حسن زايد' },{ number: 7, name: 'هدير عبدالهادى محمد عوض' },{ number: 8, name: 'على محمد سعد قضيب' },{ number: 9, name: 'وليد يوسف عبدالمقصود يوسف حسين' }
        ]
      },
      giza: {
        s_elec: [
          { number: 1, name: 'محمد محمد عباس حسانين' },{ number: 2, name: 'عبدالرحمن حسن جابر سويلم' },{ number: 3, name: 'جيهان عبدالجليل محمد عبدالدايم' },{ number: 4, name: 'اسامه عبدالغفور احمد محمد' },{ number: 5, name: 'ممدوح عبد الغنى السيد بدوى' },{ number: 6, name: 'هدي صابر حافظ السخاوي' },{ number: 7, name: 'احمد الامير عبدالرحمن عبدالسلام' },{ number: 8, name: 'محمد عبدالمنعم عبد المطلب سالم' },{ number: 9, name: 'كرم يوسف عازر جرجس' },{ number: 10, name: 'رفيق عمانوئيل سيفين انطون' },{ number: 11, name: 'عبد الفتاح محمد عبدالفتاح عليق' },{ number: 12, name: 'محمد عبدالفتاح محمد صوابي' },{ number: 13, name: 'ايه عبدالرحمن انور على طاحون' },{ number: 14, name: 'عربى احمد محمد مصطفى طايع' },{ number: 15, name: 'علاء الدين مصطفي يوسف السيد' },{ number: 16, name: 'ابانوب فيليب نجاتي يوسف' },{ number: 17, name: 'عيسي نسيم عيسي خله' },{ number: 18, name: 'محمود سيد قرنى احمد' }
        ],
        s_civil: [
          { number: 1, name: 'عمرو اسماعيل جودت محمد' },{ number: 2, name: 'محمد عباس عبده حسن عزام' },{ number: 3, name: 'سامح سيد سعد محمد الغزولى' },{ number: 4, name: 'تامر سيد توفيق عبدالسلام الطويل' },{ number: 5, name: 'عمرو محمد ابراهيم بيبرس' },{ number: 6, name: 'احمد السيد عبده السيد مصطفى الشاهد' },{ number: 7, name: 'ابانوب انطون عازر انطون' },{ number: 8, name: 'حسام الدين عزت امين محمد' },{ number: 9, name: 'ياسين سعد مصطفى محمد' },{ number: 10, name: 'احمد شكرى محمد عطايا' },{ number: 11, name: 'احمد هاني عطا محمد ابوزيد' },{ number: 12, name: 'مى كمال عبدالمجيد شحاته' },{ number: 13, name: 'هالة محمد جمال الدين عبدالحافظ القاضى' }
        ],
        s_arch: [
          { number: 1, name: 'احمد بشير عبدالجواد محمد' },{ number: 2, name: 'اكرام عبدالعزيز علي احمد' },{ number: 3, name: 'نور سامح محمد عبداللطيف ابويوسف' },{ number: 4, name: 'على حسين احمد على حسين' },{ number: 5, name: 'احمد محمود عبد الستار محمود' }
        ],
        s_combined: [
          { number: 1, name: 'رشا رضا امام حسين' },{ number: 2, name: 'احمد مختار اسماعيل احمد' },{ number: 3, name: 'عماد نظمى على حسن' },{ number: 4, name: 'عمرو عبدالمنعم حسن السيد' },{ number: 5, name: 'احمد حسين محمد حسن' },{ number: 6, name: 'السيد محمد سيد احمد مصطفى' }
        ]
      },
      dakahlia: {
        s_mech: [
          { number: 1, name: 'هشام محمد محمد حسن' },{ number: 2, name: 'محمد السيد بدير عبدالمجيد خليل' },{ number: 3, name: 'مني عمر عوض بغدادي' },{ number: 4, name: 'محمد مصطفى كمال عبد الحميد احمد' },{ number: 5, name: 'محمد احمد السيد احمد جلال' },{ number: 6, name: 'عبدالله حسين رجب رمضان حجي' },{ number: 7, name: 'منى على عبدالحليم ابراهيم' }
        ],
        s_arch: [
          { number: 1, name: 'محمد احمد ابراهيم ابراهيم' },{ number: 2, name: 'يوسف محمد محمود محمد عاشور' },{ number: 3, name: 'محمد عبدالمنعم محمد عباس' }
        ],
        s_civil: [
          { number: 1, name: 'ماجده محمود السيد حشيش' },{ number: 2, name: 'وائل عمر عبدالحميد نصار' },{ number: 3, name: 'محمد السيد ابراهيم محمود موسي' },{ number: 4, name: 'دينا محمد فكرى احمد امين طه' },{ number: 5, name: 'محمد توفيق السيد عبدالغنى' },{ number: 6, name: 'احمد وائل عبدالله المتولى عيسى' },{ number: 7, name: 'عمر محمد عبدالله زيدان' },{ number: 8, name: 'محمود عماد الدين محمد السعدني' },{ number: 9, name: 'جهاد احمد محمد متولى عبدالقادر' },{ number: 10, name: 'احمد عبدالاله جاد الحق عطيه احمد' },{ number: 11, name: 'احمد محمد ابراهيم حسن الضبيع' },{ number: 12, name: 'محمد نبيل محمود صبرى جمعه الفرحاتى' },{ number: 13, name: 'احمد محمد عبدالمؤمن حسنين' },{ number: 14, name: 'ياسر حسن ابراهيم ابراهيم' },{ number: 15, name: 'ايه بدر الدين الحسيني علي عطا' },{ number: 16, name: 'محمد عطيه السيد مصطفى فرج' },{ number: 17, name: 'ناجى محمود حسن ندا' },{ number: 18, name: 'سلمى طارق عبدالحميد المتولى عطيه' },{ number: 19, name: 'اسلام تامر توفيق محمد' },{ number: 20, name: 'مجاهد ابراهيم الدسوقى محمدالشختور' }
        ]
      },
      suez: {
        s_elec: [
          { number: 1, name: 'محمد حسن عبدالعليم عبدالمقصود' },{ number: 2, name: 'عماد محمد محمود محمد' },{ number: 3, name: 'احمد سعد بكرى محمد' },{ number: 4, name: 'احمد عماد سعد محمد' },{ number: 5, name: 'كريم محمود محمد محمد' }
        ],
        s_mech: [
          { number: 1, name: 'يسرى ياسر محمد محمد' },{ number: 2, name: 'صلاح محمد مصطفى فرحان' },{ number: 3, name: 'احمد نصر ابوالحمد سليم' }
        ],
        s_civil: [
          { number: 1, name: 'ايمن احمد رزق رميح' },{ number: 2, name: 'اشرف عبدالله عوض السيد' },{ number: 3, name: 'شريف محمود احمد مسلم' },{ number: 4, name: 'احمد محمود شعبان محمود' }
        ],
        s_petr: [
          { number: 1, name: 'رانا جمال محمد عيد' },{ number: 2, name: 'محمد مصطفي ابراهيم مصطفي' },{ number: 3, name: 'محمد عبدالسلام عبدالله الشاذلى' },{ number: 4, name: 'حمدى احمد محمد نور' }
        ]
      },
      sharqia: {
        s_elec: [
          { number: 1, name: 'ثناء عبد الحميد حسين عنانى' },{ number: 2, name: 'سعيد عبد الفتاح عبد النبى محمد' },{ number: 3, name: 'ايمن رمضان ابوهاشم على السيد' },{ number: 4, name: 'احمد هليل ابراهيم هليل' },{ number: 5, name: 'محمد عبدالحميد عبدالحميد عبدالرحمن' },{ number: 6, name: 'زكريا السيد علي سالم' },{ number: 7, name: 'محمود السيد حامد سليم' },{ number: 8, name: 'محمد احمد عبدالعزيز مصطفى' }
        ],
        s_mech: [
          { number: 1, name: 'مدحت عبدالمحسن احمد على' },{ number: 2, name: 'محمد حسن خليل الديب' },{ number: 3, name: 'محمد عبدالفتاح حامد شلبى' },{ number: 4, name: 'محمد كمال جاد محمد كساب' },{ number: 5, name: 'محمد احمد محمد ابراهيم على' },{ number: 6, name: 'بهاء محمد عبدالفتاح جريدة' }
        ],
        s_arch: [
          { number: 1, name: 'مجدى عبدالستار السيد نزهة' },{ number: 2, name: 'رضا عبدالمنعم محمد ابراهيم' },{ number: 3, name: 'جيهان مصطفي حسين سرور' }
        ],
        s_civil: [
          { number: 1, name: 'احمد محمد مرسى حسن' },{ number: 2, name: 'نهال عطيه توفيق ايوب' },{ number: 3, name: 'احمد محمود كمال عبدالرحمن' },{ number: 4, name: 'شاهنده علي احمد علي' },{ number: 5, name: 'حسن يوسف رمضان صالح' },{ number: 6, name: 'رزق ابراهيم على الزيدى' },{ number: 7, name: 'احمد مسعد فتحى عثمان' },{ number: 8, name: 'محمد محمد سليمان علي ناصر' },{ number: 9, name: 'على صبحى على احمد المصرى' },{ number: 10, name: 'محمد خلف محمد جاد المولى' },{ number: 11, name: 'سوزى كامل عبد الرحمن عوض' },{ number: 12, name: 'احمد حسن احمد محمد' },{ number: 13, name: 'عزه عطوه عجمى احمد عجمى' },{ number: 14, name: 'هايدى سعيد السيد مصطفى' },{ number: 15, name: 'ساره مجدي محمود زيد علي' }
        ],
        s_combined: [
          { number: 1, name: 'جمال عبد الغفار عبد العزيز' },{ number: 2, name: 'محمد صلاح بيومى سيد احمد' },{ number: 3, name: 'احمد سعيد عطية العزازى' }
        ]
      },
      north_sinai: {
        s_elec: [
          { number: 1, name: 'جميل محمد فؤاد كمال احمد حمدى الاهتم' },{ number: 2, name: 'سعد صبرى احمد خطابى' },{ number: 3, name: 'احمد محمد على حسن الحجاوى' }
        ],
        s_mech: [
          { number: 1, name: 'احمد محمد سلامه قويدر' },{ number: 2, name: 'محمد سالم حمدى مصطفى الليثى' },{ number: 3, name: 'احمد حسين منصور عبدالغنى' },{ number: 4, name: 'محمد حسين حماد سليم' }
        ],
        s_civil: [
          { number: 1, name: 'احمد سامى عاشور خليل' },{ number: 2, name: 'محمد يونس احمد محمد' },{ number: 3, name: 'احمد حسين عيسى عيسى الفهلوى' },{ number: 4, name: 'احمد محمود عثمان موسى' },{ number: 5, name: 'مصطفى محمود احمد العبد اسماعيل' },{ number: 6, name: 'محمد احمد سعيد حمدي الكاشف' },{ number: 7, name: 'محمود احمد سمك نمر' },{ number: 8, name: 'احمد سالم على سالم' },{ number: 9, name: 'سليمان محمود سليمان ابراهيم حمدان' },{ number: 10, name: 'محمد مصطفي كامل الازرق' },{ number: 11, name: 'مصطفي سامي محمد الحارون' },{ number: 12, name: 'محى الدين سليمان محى الدين فتوح' }
        ],
        s_combined: [
          { number: 1, name: 'محمود يوسف حسن صقر' },{ number: 2, name: 'محمد سليمان فوده' },{ number: 3, name: 'محمد داود ابراهيم فتيح' }
        ]
      },
      gharbia: {
        s_elec: [
          { number: 1, name: 'عثمان احمد عثمان محمد المهدى' },{ number: 2, name: 'سمر مسعد محمد ابراهيم الهلالي' },{ number: 3, name: 'محمود عاطف محمد نصر' },{ number: 4, name: 'احمد رمضان حسن البقرى' },{ number: 5, name: 'احمد مصطفى احمد الفوال' },{ number: 6, name: 'احمد القصبي محمد الدلتوني' },{ number: 7, name: 'حسام عزت حسن شهاب' }
        ],
        s_civil: [
          { number: 1, name: 'محمد رمضان سلامه احمد' },{ number: 2, name: 'اسامه مسعد محمد القطرى' },{ number: 3, name: 'حسان محمد عبدالمولى احمد امام' },{ number: 4, name: 'مني صالح محمد ابراهيم عامر' },{ number: 5, name: 'محمد احمد محمد ابوالنصر ابوالعينين' },{ number: 6, name: 'احمد محمد عبدالرحمن محمد عبدالعاطى' },{ number: 7, name: 'احمد عبدالله حسين الشافعى' }
        ],
        s_arch: [
          { number: 1, name: 'مدحت فاروق عبدالسيد' },{ number: 2, name: 'محمد مصطفى احمد ابوهلال' },{ number: 3, name: 'معاذ على محمد بسطويسى' }
        ],
        s_combined: [
          { number: 1, name: 'ريهام محمد يوسف النجار' },{ number: 2, name: 'رضا محمد محمود السيد احمد نوير' },{ number: 3, name: 'جيهان احمد ابراهيم سالم' }
        ]
      },
      fayoum: {
        s_elec: [
          { number: 1, name: 'مختار سعيد ابراهيم احمد' },{ number: 2, name: 'محمد احمد محمود ابوزيد' },{ number: 3, name: 'محمد خالد محمد خالد' },{ number: 4, name: 'محمود عبدالله محمد على' },{ number: 5, name: 'هشام عبدالستار امين محمد' },{ number: 6, name: 'رمضان محمد محمد بابلي علي' },{ number: 7, name: 'مينا اشرف فاروق عطيه حنا' }
        ],
        s_civil: [
          { number: 1, name: 'اسماء ظريف جمعه حسين ابوطالب' },{ number: 2, name: 'رضوان على رضوان' },{ number: 3, name: 'محمد جمال مهلهل عبدالمقصود' },{ number: 4, name: 'محمد احمد لطفى محمد لطفى حسن لطفى' },{ number: 5, name: 'عبدالرحمن محمد اسماعيل مهدى محمد' },{ number: 6, name: 'احمد كيشار عبدالنبى عبدالبصير' },{ number: 7, name: 'محمد مصطفى عبدالواحد محمد' },{ number: 8, name: 'علي محمد حسن سلطان' },{ number: 9, name: 'يوسف ربيع عبدالعزيز عبدالكريم' },{ number: 10, name: 'مصطفى عاطف شيبه ابراهيم' },{ number: 11, name: 'سمر محمود شعبان محمد' },{ number: 12, name: 'عمرو ممدوح مصطفى محمود' },{ number: 13, name: 'عماد سرحان السيد عبدالجواد' },{ number: 14, name: 'مجدى عبدالقادر خالد سليمان' },{ number: 15, name: 'مارك جورج ميخائيل استراس' }
        ],
        s_arch: [
          { number: 1, name: 'امانى جابر عبدالرحيم عبدالمولى' },{ number: 2, name: 'يمنى عاصم محمد احمد' },{ number: 3, name: 'ساره سليمان محمد كامل' }
        ],
        s_combined: [
          { number: 1, name: 'احمد محسن سيد عبدالله' },{ number: 2, name: 'ابراهيم علام معيوف ريحان' },{ number: 3, name: 'احمد ابوبكر ابراهيم محمد العشيرى' }
        ]
      },
      cairo: {
        s_elec: [
          { number: 1, name: 'احمد محمد عمر محمد هندى' },{ number: 2, name: 'نهال جمال حسن محمد' },{ number: 3, name: 'محمد ماهر محمد عبدالحليم احمد' },{ number: 4, name: 'ايمان اسماعيل عبد الجواد محمد' },{ number: 5, name: 'سيد منصور ابوالفضل منوفى' },{ number: 6, name: 'محمد مجدى عبد الله محمد الشريف' },{ number: 7, name: 'محمد شلبى سويلم شلبى' },{ number: 8, name: 'نادر ناجى صالح موسى' },{ number: 9, name: 'مصطفى محمد حمدى عبدالحليم الشربينى' },{ number: 10, name: 'عمرو محمد نبيل السيد احمد عطاالله' },{ number: 11, name: 'علاءالدين عنتر حسن ابو الحسن' },{ number: 12, name: 'محمد شعبان عبد الامام سليم' },{ number: 13, name: 'الحسين احمد محمد محمود' },{ number: 14, name: 'أحمد عبد الحكيم عبد الرحمن محمود' },{ number: 15, name: 'طارق احمد مليجى مهدى' },{ number: 16, name: 'محمود عبدالعزيز محمد ابراهيم سلامه' },{ number: 17, name: 'طارق امين معوض رضوان' },{ number: 18, name: 'سمير ابوالسعود عطيه السيد' },{ number: 19, name: 'منال صلاح الدين على الملا' },{ number: 20, name: 'ماهر جرجس ابراهيم غبريال' },{ number: 21, name: 'احمد فؤاد محمد عبدالرازق على' },{ number: 22, name: 'نيفين نبيل ويصا بشاي' },{ number: 23, name: 'اشرف رمضان عبداللطيف ابو العيش' },{ number: 24, name: 'حور منير محمد سويلم' },{ number: 25, name: 'حسنين احمد حسنين زمرة' },{ number: 26, name: 'بيشوى بنيامين مرقس ابادير' },{ number: 27, name: 'هلا محمد عبدالجواد عبدالرحمن عباده' },{ number: 28, name: 'ضياء ابراهيم محمد حافظ محمد زبادى' }
        ],
        s_civil: [
          { number: 1, name: 'ماير جرجس ملاك فرج' },{ number: 2, name: 'مجدى منصور عبدالصمد احمد' },{ number: 3, name: 'صلاح الدين محمد توفيق صالح حامد الغزاوي' },{ number: 4, name: 'مايكل جرجس عدلى جرجس' },{ number: 5, name: 'محمد محسن محمد الصعيدى' },{ number: 6, name: 'سامح تاوضروس مينا' },{ number: 7, name: 'اسامه احمد اسماعيل محمود' },{ number: 8, name: 'محمد السيد محمد' },{ number: 9, name: 'طارق سامي حسن حنفي' },{ number: 10, name: 'علاءالدين رفاعى عبدالعزيز' },{ number: 11, name: 'هشام الدين ابراهيم محمد عبد الخالق' },{ number: 12, name: 'غدير يافع يوسف نصر' },{ number: 13, name: 'احمد مصطفى احمد موسى' },{ number: 14, name: 'احمد عبدالعال ابراهيم عبدالله' },{ number: 15, name: 'شعبان ضاحي عباس حسن' },{ number: 16, name: 'رحاب محمد ابراهيم شتيوى' },{ number: 17, name: 'محمد مجدى الحسينى الدسوقى' },{ number: 18, name: 'احمد صلاح محمد طه الحاذق' },{ number: 19, name: 'ضياء السيد عبدالفتاح الكيكي' },{ number: 20, name: 'ضياء احمد عبدالفتاح عبدالحميد الكتبى' },{ number: 21, name: 'مينا عزمى عوض جرس' }
        ],
        s_mech: [
          { number: 1, name: 'نبيل لطفى أمين نزهى مينا' },{ number: 2, name: 'احمد محمد فرج عبدالبارى' },{ number: 3, name: 'امير مسعد عبدالله البسيونى' },{ number: 4, name: 'عبدالله صالح محمود صالح' },{ number: 5, name: 'شريف مصطفى مصطفى احمد' },{ number: 6, name: 'مجدى طه محمد السقا' },{ number: 7, name: 'طارق محمد عبد السلام خضر' },{ number: 8, name: 'احمد محمد سيد محمد' },{ number: 9, name: 'على محمد على محمد' },{ number: 10, name: 'فؤاد حلمى سليم عبدالرحمن' },{ number: 11, name: 'طارق محمد محمد عبدالنبي اسماعيل' },{ number: 12, name: 'رضا عبدالسلام صابر محمد' }
        ],
        s_arch: [
          { number: 1, name: 'شريف جوده محمد السيد عليوه' },{ number: 2, name: 'نيرفانا اسامة حنفى محمود' },{ number: 3, name: 'يحيي محمد الزينى طه حجازى' },{ number: 4, name: 'خالد محمد عزمى حسنين' },{ number: 5, name: 'ياسر محمد ذكي ابوالفتوح' },{ number: 6, name: 'مصطفى عبدالمجيد محمد عطيه عبدالمجيد' },{ number: 7, name: 'سونيا شرف الدين عرابى' },{ number: 8, name: 'احمد عصمت محمد فريد سعيد منصور' },{ number: 9, name: 'محمد العيداروس اسماعيل اسماعيل محمد' }
        ]
      },
      qalyubia: {
        s_elec: [
          { number: 1, name: 'محمد السيد السيد شعلان' },{ number: 2, name: 'احمد محى الدين محمد الحملاوى' },{ number: 3, name: 'احمد نعيم عبدالحسيب حسين' },{ number: 4, name: 'ايمان المرسى المرسى محمد' },{ number: 5, name: 'اسامه سعيد احمد صالح بيان' },{ number: 6, name: 'محمد عمرو السيد عزب' },{ number: 7, name: 'اسلام اسامه السيد عبدالرحمن هلال' },{ number: 8, name: 'منال زين العابدين عمر مصطفي' }
        ],
        s_mech: [
          { number: 1, name: 'صلاح شكرى اسحاق ابراهيم' },{ number: 2, name: 'عبدالرحمن ماهر محمد درويش عوض' },{ number: 3, name: 'محمود عادل شحته غنيمى رمضان' }
        ],
        s_civil: [
          { number: 1, name: 'فهمى صلاح فهمى عبدالحليم' },{ number: 2, name: 'اسلام ابوالفتوح ابوالسعود احمد' },{ number: 3, name: 'جمال عبد العال حجاب' },{ number: 4, name: 'ابتسام احمد على صالح' },{ number: 5, name: 'عادل صبحى طه سيد' },{ number: 6, name: 'مدحت حسن مختار حسن' }
        ]
      },
      monufia: {
        s_elec: [
          { number: 1, name: 'محمد مصطفى فتحى مصطفى حجاب' },{ number: 2, name: 'احمد سمير بيومى محمد شريف' },{ number: 3, name: 'صفاء مصطفى محمد حسنين' }
        ],
        s_mech: [
          { number: 1, name: 'حبيبة محمود طلب محمد' },{ number: 2, name: 'رمضان ابراهيم سيد احمد سراج' },{ number: 3, name: 'امير سعيد عبدالمعطى الدسوقى' },{ number: 4, name: 'محمود محمد ابراهيم ابوعصفور' },{ number: 5, name: 'عبد المؤمن محمد عبد الرحمن هدهود' },{ number: 6, name: 'مصطفى محمود سعيد محمود مرسى' },{ number: 7, name: 'عمر مفيد مليجى الليثى' },{ number: 8, name: 'سهير عبدالسلام علي مغربى' }
        ],
        s_arch: [
          { number: 1, name: 'شيماء سعيد عبدالرحمن محمد درويش' },{ number: 2, name: 'ايناس عادل صادق سمعان' },{ number: 3, name: 'ربيع السيد منصور ابو يوسف' },{ number: 4, name: 'محمد عادل عبدالعظيم حجازى' },{ number: 5, name: 'حسام الدين حسن عبدالفتاح احمد' }
        ],
        s_civil: [
          { number: 1, name: 'اسلام فهمى عبدالفتاح بدوى' },{ number: 2, name: 'حسين شعبان حسين الحاجه' },{ number: 3, name: 'عمرو عبدالله عبدالعزيز بهنسى' },{ number: 4, name: 'محمد عبدالحميد عبدالمحسن مصطفى' },{ number: 5, name: 'سمير عبده زكي بليله' },{ number: 6, name: 'محمد خالد السباعى يوسف تمراز' },{ number: 7, name: 'علي عبدالله محمد الصواف' },{ number: 8, name: 'رشا احمد رشاد ابراهيم البنا' },{ number: 9, name: 'رضا محمد بسيونى الصياد' },{ number: 10, name: 'ماهر السيد عبدالجواد سعد' }
        ],
        s_combined: [
          { number: 1, name: 'د.احمد محمد ابوالسعود عبدالرحمن' },{ number: 2, name: 'محمد محيى السيد عجلان' },{ number: 3, name: 'اشرف محمود احمد هاشم' },{ number: 4, name: 'احمد فؤاد عدوى امام احمد' }
        ]
      },
      minya: {
        s_elec: [
          { number: 1, name: 'احمد محمد احمد خميس' },{ number: 2, name: 'طه محمد مدين عدلى فضل' },{ number: 3, name: 'زكريا عبدالحكيم عبدالعليم' },{ number: 4, name: 'علاء فريد زكي بانوب' }
        ],
        s_civil: [
          { number: 1, name: 'محمد عبد العزيز محمد عيسى' },{ number: 2, name: 'كاميليا عبدالعزيز توفيق سطوحى' },{ number: 3, name: 'مصطفى احمد مجدى عبدالفتاح احمد الليثى' },{ number: 4, name: 'ابراهيم عثمان احمد محمد' },{ number: 5, name: 'انطونيوس جوزيف شحاته كيرلس' },{ number: 6, name: 'محمود احمد انور حسن' },{ number: 7, name: 'محمد محمد عبدالمنعم عبدالرحمن' },{ number: 8, name: 'ياره احمد مصطفي سيد' }
        ],
        s_arch: [
          { number: 1, name: 'احمد عبدالرحمن ربيع رويدي' },{ number: 2, name: 'ناجح سالم عبدالحفيظ تونى' },{ number: 3, name: 'محمود محمد صفوت حسن صفوت' },{ number: 4, name: 'عبد الرحمن محمد ابراهيم يوسف' },{ number: 5, name: 'عادل محمد محمد رمضان' },{ number: 6, name: 'صلاح عبدالله منصور على' },{ number: 7, name: 'احمد حسين عبدالعزيز حسين' }
        ],
        s_combined: [
          { number: 1, name: 'ايمان رشدى وهبة' },{ number: 2, name: 'محمود محمد عمر احمد' },{ number: 3, name: 'شعبان فتحى شافعى عبدالوارث' },{ number: 4, name: 'علي محمد محمود محمد' }
        ]
      },
      newvalley: {
        s_elec: [
          { number: 1, name: 'احمد محمود ابوبكر عبدالله' },{ number: 2, name: 'احمد هاشم عبدالعال محمود' },{ number: 3, name: 'احمد بكر على مرسى' }
        ],
        s_mech: [
          { number: 1, name: 'محمد مجدى على الشوربجى' }
        ],
        s_civil: [
          { number: 1, name: 'مصطفى محمد عبدالله سليم' },{ number: 2, name: 'محمد عبدالحكيم زهرى محمد' },{ number: 3, name: 'ناصر ابراهيم حنفي محمد' },{ number: 4, name: 'عمرو احمد سيد محمد رضوان' },{ number: 5, name: 'محمد عزالدين صالح عمر' },{ number: 6, name: 'اسماء بصيط محمد ادم' }
        ],
        s_arch: [
          { number: 1, name: 'هند على نظير مصطفى' },{ number: 2, name: 'ابراهيم سويلم عباس محمد' }
        ],
        s_combined: [
          { number: 1, name: 'مروه عادل محمد عبدالناصح' }
        ]
      },
      benisuef: {
        s_elec: [
          { number: 1, name: 'محمد حسين صالح القرملاوى' },{ number: 2, name: 'عادل عزت عبدالجيد ابراهيم' }
        ],
        s_civil: [
          { number: 1, name: 'فتحى جمعه فتحى رمضان' },{ number: 2, name: 'الامير هاني سيد توفيق علي عثمان' },{ number: 3, name: 'مى على عبدالعزيز حسين' },{ number: 4, name: 'مؤمن شعبان عبدالوهاب محمد' },{ number: 5, name: 'طلعت احمد عفت حسين على' },{ number: 6, name: 'احمد جمال عبدالعظيم محمود' },{ number: 7, name: 'محمود فتحى عبدالفتاح محمد' },{ number: 8, name: 'محمد حسين عابدين سيد' },{ number: 9, name: 'نضال جمال فتحى عبدالوهاب' },{ number: 10, name: 'اسامه شعبان احمد سعد' },{ number: 11, name: 'اسراء صلاح الدين عبدالعظيم مصطفى' },{ number: 12, name: 'محمد احمد قرنى مرسى' }
        ],
        s_arch: [
          { number: 1, name: 'احمد سعد توفيق مرسى' },{ number: 2, name: 'اسلام محمد عاصم احمد حلمي' },{ number: 3, name: 'بيتر سميح لويس حبيب' }
        ]
      },
      portsaid: {
        s_elec: [
          { number: 1, name: 'حمدي حسني السيد سالم' },{ number: 2, name: 'هبه محمد السعيد عبده حموده' },{ number: 3, name: 'خالد محمد عطيه على' },{ number: 4, name: 'خالد الرفاعى محمد الرشيدى' }
        ],
        s_mech: [
          { number: 1, name: 'سحر محمد السيد عبدالرحمن' },{ number: 2, name: 'احمد عادل عبدالله عفيفي الخولي' },{ number: 3, name: 'طه عمر على عبد الله' },{ number: 4, name: 'عبدالرحمن محمد داغر داغر منصور' },{ number: 5, name: 'محمد محمد محمد يوسف طيره' },{ number: 6, name: 'دينا صلاح محمد عبده السرى' },{ number: 7, name: 'محمد عبدالفتاح توفيق احمد' }
        ],
        s_civil: [
          { number: 1, name: 'حسن عبدالرحمن حسن البسيوني' },{ number: 2, name: 'محمد طنيب محمد عوض رماده' },{ number: 3, name: 'اسامه محمد محمد الحنفى' }
        ],
        s_arch: [
          { number: 1, name: 'شيرين نصر محمد المصري' },{ number: 2, name: 'اسراء محمد ابراهيم الدسوقى حسن عبدالمجيد' }
        ],
        s_combined: [
          { number: 1, name: 'هيثم السعيد محمد مصيلحى' },{ number: 2, name: 'محمد جمال عبدالناصر منصور فياض' }
        ]
      },
      damietta: {
        s_elec: [
          { number: 1, name: 'اسعد رمضان محمد شاكر' },{ number: 2, name: 'احمد محمد عبدالسلام بدوى' },{ number: 3, name: 'على محمد على الجنتيرى' },{ number: 4, name: 'محمد طلعت عوض فايد' },{ number: 5, name: 'عبدالرحمن شكرى محمد على المغلاوى' }
        ],
        s_mech: [
          { number: 1, name: 'يوسف عبدالخالق على العاصى' },{ number: 2, name: 'طارق عبدالحميد عبدالحميد رمضان' }
        ],
        s_civil: [
          { number: 1, name: 'محمد حسن موافى اسماعيل' },{ number: 2, name: 'ايه صالح السعيد ابو العز' },{ number: 3, name: 'وائل عبده عوض محمد بقا' },{ number: 4, name: 'محمود محمد محمود حافظ البساطى' },{ number: 5, name: 'ابراهيم منصور ابراهيم القط' },{ number: 6, name: 'كريم صلاح السيد المسلماني' },{ number: 7, name: 'صابرين خضر يوسف بدوى' },{ number: 8, name: 'محمد محمد على شرارة' }
        ],
        s_combined: [
          { number: 1, name: 'امال السيد السيد القصاص' },{ number: 2, name: 'عبدالله حسن الشحات محمد عارف' },{ number: 3, name: 'محمد ياسر رضا على سماحه' }
        ]
      },
      sohag: {
        s_elec: [
          { number: 1, name: 'محمد عادل عبدالرحيم خضر' },{ number: 2, name: 'نهال مغربي بهيج عبدالجليل' },{ number: 3, name: 'اسماعيل عبدالعزيز عبدالغفار محمد' }
        ],
        s_mech: [
          { number: 1, name: 'احمد محمد احمد ابراهيم' },{ number: 2, name: 'فتحى محمد عبدالبديع الطيب' },{ number: 3, name: 'وليد جمال عزالعرب فرغل' },{ number: 4, name: 'عادل محمد احمد موسي' },{ number: 5, name: 'حسام حمدى بشاتى عبدالعال' }
        ],
        s_civil: [
          { number: 1, name: 'مينا عزت فخرى عبدالملك' },{ number: 2, name: 'احمد حمدى عبدالرحيم أحمد' },{ number: 3, name: 'محمد راغب مصباح احمد' },{ number: 4, name: 'علا صلاح محمد محمد' },{ number: 5, name: 'محمد شوقي يوسف عبدالرحمن' },{ number: 6, name: 'محمد رجب احمد كمال الدين' },{ number: 7, name: 'احمد سعد محمد محمد' },{ number: 8, name: 'زياد اشرف صبري شيبه' }
        ],
        s_arch: [
          { number: 1, name: 'امل عبدالحميد محمد عبدالرحيم' },{ number: 2, name: 'محمد ابراهيم عبدالعزيز حسن' },{ number: 3, name: 'مها صابر محمد مراد' }
        ],
        s_combined: [
          { number: 1, name: 'مصطفى محمد عادل قدرى عبداللاه' },{ number: 2, name: 'عبير محمد جوده عبد الظاهر' },{ number: 3, name: 'محمد بهاء احمد محمد احمد القاضى' }
        ]
      },
      qena: {
        s_elec: [
          { number: 1, name: 'محمود عزت محمد احمد القاضى' },{ number: 2, name: 'وليد عبدالعزيز عبداللطيف جاد' },{ number: 3, name: 'محمد مصطفى احمد محمد' },{ number: 4, name: 'اسماعيل عبدلي اسماعيل حسنين' },{ number: 5, name: 'فاطمة محمد حسن محمود' },{ number: 6, name: 'محمد عبد الجواد محمد محمود' },{ number: 7, name: 'محمد على احمد سليمان' },{ number: 8, name: 'محمود ابوالحسن كامل حافظ' },{ number: 9, name: 'ساره يسن عمر احمد' },{ number: 10, name: 'ابوزيد احمد عبداللطيف عوض الله' }
        ],
        s_civil: [
          { number: 1, name: 'الامير خليفه منوفى خليفه' },{ number: 2, name: 'على ابراهيم على مصطفى' },{ number: 3, name: 'عبدالرحمن عبدالحكم حسن القليل' },{ number: 4, name: 'حازم عبدالسلام ضرار درويش' },{ number: 5, name: 'ممدوح سيد عبد الباقى خليل' },{ number: 6, name: 'احمد عبد الرؤوف فاضل محمد' },{ number: 7, name: 'عبدالمتين محمود محمد نور الدين' },{ number: 8, name: 'عبدالرحيم السيد محمد على' },{ number: 9, name: 'محمود احمد عبدالحافظ احمد' },{ number: 10, name: 'الشيماء سمير فخرى السمان' },{ number: 11, name: 'مني محمود مصطفي محمود' },{ number: 12, name: 'مالك محمد محمود احمد تميرك' },{ number: 13, name: 'كيرلس ناصر بخيت غطاس' },{ number: 14, name: 'محمد احمد شرقاوى ابراهيم' },{ number: 15, name: 'د. زكريا حميد عوض الله ابراهيم' },{ number: 16, name: 'احمد حمدى حافظ سليم' },{ number: 17, name: 'محمد بدرى امين نادى' }
        ]
      },
      kafr_elsheikh: {
        s_elec: [
          { number: 1, name: 'محمد فتحى حامد الصافى مرسى' },{ number: 2, name: 'عمرو مصطفى عباس خليفة حامد' }
        ],
        s_civil: [
          { number: 1, name: 'سامى بدران سليمان الغنام' },{ number: 2, name: 'حسام السعيد علي هميسه' },{ number: 3, name: 'سامى هنداوى على هنداوى' },{ number: 4, name: 'مدحت سنوسى عبدالله الطرابلسى' },{ number: 5, name: 'فتحى عبدالعظيم عبدالمجيد بسيونى' },{ number: 6, name: 'احمد محمود بسيوني الشناوي' },{ number: 7, name: 'ضياء اشرف ممدوح عبدالونيس' },{ number: 8, name: 'مصطفى احمد احمد البرهامى' },{ number: 9, name: 'احمد علاء الدين محمد احمد جمعه' },{ number: 10, name: 'ابراهيم جمال عبدالمجيد محمد غنيم' },{ number: 11, name: 'فتحى صلاح عبدالجليل احمد العساسى' },{ number: 12, name: 'رامى ابراهيم الشناوى مرسى القللى' }
        ],
        s_arch: [
          { number: 1, name: 'رائف احمد خليل بدوى' },{ number: 2, name: 'خالد السيد خالد ابراهيم' },{ number: 3, name: 'السيد عثمان على عثمان وربى' },{ number: 4, name: 'ايمان ابو بكر احمد على العونى' }
        ]
      },
      matrouh: {
        s_elec: [
          { number: 1, name: 'هناء عطا محمد يوسف محفوظ' },{ number: 2, name: 'اسماء حسن على متولى' },{ number: 3, name: 'هيثم ابراهيم اسماعيل عزام' }
        ],
        s_mech: [
          { number: 1, name: 'نهال المتولى ابراهيم هجرس' }
        ],
        s_civil: [
          { number: 1, name: 'عبدالرحمن يوسف سويد سلومة' },{ number: 2, name: 'ادهم احمد عبدالغني القليني' },{ number: 3, name: 'عبدالرحمن عامر حلمى فهمى' },{ number: 4, name: 'عصام الدين السيد مرسي ابراهيم' },{ number: 5, name: 'صبحى كامل عبداللاهوت سريان' },{ number: 6, name: 'احمد صابر ابراهيم ابراهيم' }
        ],
        s_arch: [
          { number: 1, name: 'عمرو محمود فتحى محمد سطيحه' },{ number: 2, name: 'محمد خلف صادق احمد' }
        ]
      }
    },
    // === ورقة 2: المجلس مكملين (universal) ===
    // الهيكل: board[sectionId] = [{number, name}]
    // 7 أقسام × مقاعد: كهرباء(2) مدني(2) ميكانيكا(2) عمارة(2) كيمياء(1) غزل(1) تعدين(1) = 11 مقعد
    board: {
      b_elec: [
        { number: 1, name: 'احمد السيد محمد احمد عبدالرازق' },{ number: 2, name: 'جيهان عبدالجليل محمد عبدالدايم' },{ number: 3, name: 'مرفت علي محمد السلاموني' },{ number: 4, name: 'اشرف احمد محمد السيد نصير' },{ number: 5, name: 'احمد حسن علي درويش' },{ number: 6, name: 'جون جورجي غبور' },{ number: 7, name: 'ممدوح عبد الغنى السيد بدوى' },{ number: 8, name: 'مصطفى السيد فاضل الزلاط' },{ number: 9, name: 'محمد مصطفى محمد الفحام' },{ number: 10, name: 'محمد شلبى سويلم شلبى' },{ number: 11, name: 'سمير ابوالسعود عطيه السيد' },{ number: 12, name: 'عادل مصطفى محمد عبدالفتاح حسن' },{ number: 13, name: 'مبروك عبدالله عامر الشقيدي' },{ number: 14, name: 'احمد صلاح الدين احمد عكاشه الدالى' },{ number: 15, name: 'مجدي محمد عبدالله ابراهيم' },{ number: 16, name: 'أحمد عبد الحكيم عبد الرحمن محمود' },{ number: 17, name: 'وائل ماجد السيد بدوى' },{ number: 18, name: 'احمد محمد صلاح الدين محمود الشناوى' },{ number: 19, name: 'احمد محمد فؤاد محمد عبدالسلام' },{ number: 20, name: 'عبد الغنى بدير عبدالغنى احمد' },{ number: 21, name: 'ايمن رمضان ابوهاشم على السيد' },{ number: 22, name: 'حسنين احمد حسنين زمرة' },{ number: 23, name: 'جمال علي عبدالسلام يونس' },{ number: 24, name: 'ماهر جرجس ابراهيم غبريال' },{ number: 25, name: 'محمد عبدالحميد عبدالحميد عبدالرحمن' },{ number: 26, name: 'احمد مختار معوض عبدالمجيد' },{ number: 27, name: 'مصطفى محمد حمدى عبدالحليم الشربينى' },{ number: 28, name: 'غادة مصطفى لبيب' },{ number: 29, name: 'منى رزق ابراهيم' },{ number: 30, name: 'حسن عبدالمحسن حسن محمد' },{ number: 31, name: 'احمد فؤاد محمد عبدالرازق على' },{ number: 32, name: 'السيد ابوالعمايم احمد شبانة' },{ number: 33, name: 'محمد كمال احمد محمود' },{ number: 34, name: 'ماجد جمال لطفى زهره' },{ number: 35, name: 'محمد عبدالمنعم عبد المطلب سالم' },{ number: 36, name: 'فاروق على زكى الحكيم' }
      ],
      b_civil: [
        { number: 1, name: 'الهيثم عبدالحميد نصر عبدالله' },{ number: 2, name: 'عبدالستار غلاب عبدالمجيد محمد' },{ number: 3, name: 'ابراهيم على مرسى محمد' },{ number: 4, name: 'احمد محمد محمد فوده حشيش' },{ number: 5, name: 'وليد احمد فؤاد محمد' },{ number: 6, name: 'هبه عادل عباس السيد ناصر' },{ number: 7, name: 'احمد محمد مرسى حسن' },{ number: 8, name: 'احمد محمد اسماعيل السيد' },{ number: 9, name: 'احمد علي حسن سلامة' },{ number: 10, name: 'علاء عوض احمد حسن' },{ number: 11, name: 'محمد علوى عبدالمجيد' },{ number: 12, name: 'حسام طلعت احمد احمد جمعه' },{ number: 13, name: 'محمد فاروق السعيد السيد' },{ number: 14, name: 'مايكل جرجس عدلى جرجس' },{ number: 15, name: 'سامح تاوضروس مينا' },{ number: 16, name: 'رزق ابراهيم على الزيدى' },{ number: 17, name: 'عمر محمد عبدالله زيدان' },{ number: 18, name: 'اسامه احمد اسماعيل محمود' },{ number: 19, name: 'ايمان جابر علام محمد' },{ number: 20, name: 'طارق سامي حسن حنفي' },{ number: 21, name: 'علاءالدين رفاعى عبدالعزيز' },{ number: 22, name: 'حسن عيد حسن علي عليوه' },{ number: 23, name: 'هشام الدين ابراهيم محمد عبد الخالق' },{ number: 24, name: 'احمد رجب فوزى عبدالسلام' },{ number: 25, name: 'احمد مصطفى احمد موسى' },{ number: 26, name: 'احمد عبدالعال ابراهيم عبدالله' },{ number: 27, name: 'محمد عزالدين صالح عمر' },{ number: 28, name: 'شعبان ضاحي عباس حسن' },{ number: 29, name: 'احمد محمد سمير محمد على الكاشف' },{ number: 30, name: 'محمود احمد فهمى عبدالحميد نصار' },{ number: 31, name: 'هالة محمد جمال الدين عبدالحافظ القاضى' },{ number: 32, name: 'ابراهيم محمد عبدالعزيز احمد الحلواني' },{ number: 33, name: 'عادل توفيق سعد شحاتة' },{ number: 34, name: 'ناجى محمود حسن ندا' },{ number: 35, name: 'طه محمد طه ابراهيم' },{ number: 36, name: 'هشام امين محمد البلبيسى' },{ number: 37, name: 'اشرف فكرى السيد شطا' },{ number: 38, name: 'محمد مجدى الحسينى الدسوقى' },{ number: 39, name: 'عصام صلاح العباسي زهران' }
      ],
      b_mech: [
        { number: 1, name: 'احمد محمد فرج عبدالبارى' },{ number: 2, name: 'عماد محمد محمود محمد' },{ number: 3, name: 'يوسف عبدالخالق على العاصى' },{ number: 4, name: 'مصطفى عبدالخالق على ابوزيد' },{ number: 5, name: 'محمد مصطفى محمد منصور' },{ number: 6, name: 'ياسر احمد مأمون عبدالكامل' },{ number: 7, name: 'اشرف محمد محمد ابوالنور' },{ number: 8, name: 'شريف مصطفى مصطفى احمد' },{ number: 9, name: 'مجدى طه محمد السقا' },{ number: 10, name: 'سعيد احمد محروس خالد' },{ number: 11, name: 'صالح محمود صالح فرغلى' },{ number: 12, name: 'محمد السعيد محمد السعيد حلقه' },{ number: 13, name: 'على محمد على محمد' },{ number: 14, name: 'محمد كمال جاد محمد كساب' },{ number: 15, name: 'فؤاد حلمى سليم عبدالرحمن' },{ number: 16, name: 'مدحت عادل زكى بطرس' },{ number: 17, name: 'عبدالمعبود عبدالعظيم عبدالمعبود خفاجى' },{ number: 18, name: 'محمد حسين حماد سليم' },{ number: 19, name: 'ابراهيم سعد عبدربه احمد' },{ number: 20, name: 'احمد محمد بدر الدين احمد' },{ number: 21, name: 'يس محمد احمد يس' },{ number: 22, name: 'محمد محمود عبده الخولى' },{ number: 23, name: 'بهاء محمد عبدالفتاح جريدة' },{ number: 24, name: 'ايمن محمد حسن حسين' }
      ],
      b_arch: [
        { number: 1, name: 'مؤمن احمد محمد شفيق احمد' },{ number: 2, name: 'شيماء سعيد عبدالرحمن محمد درويش' },{ number: 3, name: 'فيصل محمود عوض حسنين' },{ number: 4, name: 'يحيي محمد الزينى طه حجازى' },{ number: 5, name: 'عبدالعزيز حسب الله محمد الكفراوى' },{ number: 6, name: 'نيرفانا اسامة حنفى محمود' },{ number: 7, name: 'خالد محمد عزمى حسنين' },{ number: 8, name: 'مصطفى عبدالمجيد محمد عطيه عبدالمجيد' },{ number: 9, name: 'محمد العيداروس اسماعيل اسماعيل محمد' },{ number: 10, name: 'ايمان محمد محمد عسل' },{ number: 11, name: 'اكرم فاروق محمد عبداللطيف' },{ number: 12, name: 'احمد محمد حسنى على رضوان' },{ number: 13, name: 'مياده محمد فتحى احمد السيد متولى' },{ number: 14, name: 'اشرف كمال جبره' },{ number: 15, name: 'حسناء محمد العياش سنوسى محمد' },{ number: 16, name: 'وليد محمود عبدالعزيز غنيم' }
      ],
      b_chem: [
        { number: 1, name: 'موهاب محمد برعى نصر' },{ number: 2, name: 'احمد على الدسوقى السودانى' },{ number: 3, name: 'بثينة الحسينى عبدالجواد شليل' },{ number: 4, name: 'نهله سليمان محمد عبده زايد' },{ number: 5, name: 'محمد عبدالباسط عبدالرحيم محمد' },{ number: 6, name: 'ريهام عادل محمد شحاته مصطفى' },{ number: 7, name: 'محمد عبدالله على عيد' },{ number: 8, name: 'احمد عبدالرحمن محمد بدر' },{ number: 9, name: 'عصام عبدالفتاح ابوزيدالنجريدي' },{ number: 10, name: 'هاني خالد محمد حسن كحيل' }
      ],
      b_text: [
        { number: 1, name: 'اسامه علي محمد علي القصاص' },{ number: 2, name: 'محسن حسين محمد محمد شاهين' },{ number: 3, name: 'احمد محمد مصطفى محمد' },{ number: 4, name: 'محمود محمد عمر احمد' },{ number: 5, name: 'سمير احمد ابو الفتوح على' },{ number: 6, name: 'عمرو عبدالمنعم حسن السيد' },{ number: 7, name: 'السيد محمد سيد احمد مصطفى' },{ number: 8, name: 'علاء عبدالحليم سليمان ريحان' },{ number: 9, name: 'زينب قرنى يوسف عفيفى' }
      ],
      b_petr: [
        { number: 1, name: 'د.احمد محمد ابوالسعود عبدالرحمن' },{ number: 2, name: 'بهاء عبدالمنعم محمد السيد الطوخى' },{ number: 3, name: 'احمد حسين على محمد' },{ number: 4, name: 'منال محمد متولى صبيحة' },{ number: 5, name: 'محمد عبدالعظيم احمد عبدالعال' },{ number: 6, name: 'عبدالخالق سيد عبدالخالق جمعه' }
      ]
    }
  }
};
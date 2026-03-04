import { ENG_DATA } from './eng_data.js';

export const getCommittees = () => {
  const committees = [];
  for (const [key, venueList] of Object.entries(ENG_DATA.venues)) {
    venueList.forEach(venue => {
      committees.push({
        id: venue.id,
        name: venue.name,
        syndicate: key,
        totalCommittees: venue.totalCommittees
      });
    });
  }
  return committees;
};

export const getCandidates = () => {
  return ENG_DATA.candidates;
};

export const getBallots = () => {
  return ENG_DATA.ballots;
};

export const getDivisions = () => {
  return ENG_DATA.divisions;
};

export const getSyndicates = () => {
  return Object.keys(ENG_DATA.venues);
}

export const getSyndicateName = (key) => {
  const names = {
    cairo: 'القاهرة',
    giza: 'الجيزة',
    qalyubia: 'القليوبية',
    alexandria: 'الإسكندرية',
    monufia: 'المنوفية',
    portsaid: 'بورسعيد',
    ismailia: 'الإسماعيلية',
    suez: 'السويس',
    gharbia: 'الغربية',
    dakahlia: 'الدقهلية',
    kafr_elsheikh: 'كفر الشيخ',
    beheira: 'البحيرة',
    fayoum: 'الفيوم',
    qena: 'قنا',
    aswan: 'أسوان',
    sohag: 'سوهاج',
    assiut: 'أسيوط',
    minya: 'المنيا',
    redsea: 'البحر الأحمر',
    newvalley: 'الوادي الجديد',
    north_sinai: 'شمال سيناء',
    sharqia: 'الشرقية',
    damietta: 'دمياط',
    benisuef: 'بني سويف',
    matrouh: 'مطروح',
    luxor: 'الأقصر',
    south_sinai: 'جنوب سيناء'
  };
  return names[key] || key;
}

export const getDivisionName = (key) => {
  return ENG_DATA.divisions[key]?.name || key;
}

export const getBallotName = (key) => {
  return ENG_DATA.ballots[key]?.name || key;
}

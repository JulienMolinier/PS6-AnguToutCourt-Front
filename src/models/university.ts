export interface University {
  id: number;
  imgPath: string;
  name: string;
  country: string;
  city: string;
  program: string;
  placesNumber: number;
  rates: number[];
  nbReviews: number;
  description: string;
  rate?: number;
  nbOldExp: number;
  semester: number[];
  campusDesc: string;
  campusImgs: string[];
  location: string;
  inscriptiondesc: string;
  contacts: string[];
  major: string[];
  link: string;
  recommended: boolean;
  lifecost: number;
}


export interface Review {
  FirstName: string;
  LastName: string;
  Major: string;
  City: string;
  Country: string;
  Description: string;
  Date: Date;

}

export enum Major {
  SI = 'Génie Informatique',
  GB = 'Génie Biologique',
  MAM = 'Mathématiques-Appliquées-Modélisation',
  ELEC = 'Génie Électronique',
  BAT = 'Génie du Bâtiment',
  GE = 'Génie de l Eau'
}



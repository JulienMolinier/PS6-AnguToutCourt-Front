export interface LastOpinions {
  FirstName: string;
  LastName: string;
  Major: string;
  City: string;
  Country: string;
  Opinion: string;

}

export enum Major {
  SI = 'Informatique',
  GB = 'Génie Biologique',
  MAM = 'Mathématiques-Appliquées-Modélisation',
  ELEC = 'Génie Électronique',
  BAT = 'Génie du Bâtiment',
  GE = 'Génie de l Eau'
}

export interface Review {
  FirstName: string;
  LastName: string;
  Formation: string;
  City: string;
  Country: string;
  Description: string;

}

export enum Formations {
  SI = 'Informatique',
  MA = 'Mathématique',
  MAF = 'Math-Appliqué-Finances',
}

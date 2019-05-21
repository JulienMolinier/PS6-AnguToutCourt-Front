export interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  id: number;
  major: Major;
  isAdmin: boolean;

}

export enum Major {
  SI = 'Sciences Informatiques',
  GB = 'Génie Biologique',
  MAM = 'Mathématiques-Appliquées-Modélisation',
  ELEC = 'Génie Électronique',
  BAT = 'Génie du Bâtiment',
  GE = 'Génie de l Eau',
  ADMIN = 'Administrateur'

}

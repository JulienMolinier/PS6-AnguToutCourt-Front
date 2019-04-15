import {Profile} from './profile';
import {University} from './university';

export interface Review {
  universityId: number;
  email: string;
  Description: string;
  Date: Date;
  Rate: number;
  profile?: Profile;
  university?: University;
}



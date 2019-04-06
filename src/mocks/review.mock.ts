import {Major, Review} from '../models/review';
const dateToday: Date = new Date();
export const REVIEW_MOCKED: Review[] = [
  {
    FirstName: 'Mekouar',
    LastName: 'Youssef',
    Major: Major.SI,
    City: 'Stockholm',
    Country: 'Suède',
    Description: 'Très bon programme! Une expérience enrichissante et de belles rencontres.Cette destination.',
    Date: dateToday,
  },
  {
    FirstName: 'ELALAOUI',
    LastName: 'Hasnaa',
    Major: Major.MAM,
    City: 'Montréal',
    Country: 'Canada',
    Description: 'Très satisfaite de cet échange, les cours correspondent parfaitement . Veillez à prendre vos gros pulls! ',
    Date: dateToday,  },

  {
    FirstName: 'MOLINIER',
    LastName: 'Julien',
    Major: Major.BAT,
    City: 'Bangkok',
    Country: 'Thaïlande',
    Description: 'Agréablement surpris par la qualité de l enseignement ainsi que la beauté du pays.',
    Date: dateToday,
  }
];

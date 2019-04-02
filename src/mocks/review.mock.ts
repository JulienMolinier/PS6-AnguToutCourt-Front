import {Major, Review} from '../models/review';

export const REVIEW_MOCKED: Review[] = [
  {
    FirstName: 'Mekouar',
    LastName: 'Youssef',
    Major: Major.SI,
    City: 'Stockholm',
    Country: 'Suède',
    Description: 'Très bon programme! Une expérience enrichissante et de belles rencontres. Je vous recommande fortement cette destination.',
  },
  {
    FirstName: 'ELALAOUI',
    LastName: 'Hasnaa',
    Major: Major.MAM,
    City: 'Montréal',
    Country: 'Canada',
    Description: 'Très satisfaite de cet échange, les cours correspondent parfaitement à la description. Veillez à prendre vos gros pulls! ',
  },
  {
    FirstName: 'MOLINIER',
    LastName: 'Julien',
    Major: Major.BAT,
    City: 'Bangkok',
    Country: 'Thaïlande',
    Description: 'Agréablement surpris par la qualité de l enseignement ainsi que la beauté du pays.',
  }
];

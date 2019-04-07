import {University} from '../models/university';

export const UNIVERSITIES_MOCKED: University[] = [
  {
    id: 1,
    imgPath: '../../favicon.ico',
    name: 'Université de Montpellier',
    city: 'Montpellier',
    country: 'France',
    rates: [5],
    placesNumber: 20,
    program: 'ERASMUS',
    description: 'La meilleure université au monde.',
    nbReviews: 1,
    nbOldExp: 23,
    semester: [
      1,
      2
    ]
  },
  {
    id: 2,
    imgPath: '../../favicon.ico',
    name: 'Université de Nice',
    city: 'Nice',
    country: 'France',
    rates: [4],
    description: 'La meilleure université au monde.',
    placesNumber: 10,
    program: 'ERASMUS',
    nbReviews: 1,
    nbOldExp: 23,
    semester: [
      1,
      2
    ]
  },
];

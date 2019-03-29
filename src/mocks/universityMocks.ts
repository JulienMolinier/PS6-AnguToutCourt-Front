import {University} from '../models/university';

export const UNIVERSITIES_MOCKED: University[] = [
  {
    id: 1,
    imgPath: '../../favicon.ico',
    name: 'Université de Montpellier',
    city: 'Montpellier',
    country: 'France',
    rate: 5,
    placesNumber: 20,
    program: 'ERASMUS',
    description: 'La meilleure université au monde.',
    nbReviews: 0
  },
  {
    id: 2,
    imgPath: '../../favicon.ico',
    name: 'Université de Nice',
    city: 'Nice',
    country: 'France',
    rate: 4,
    placesNumber: 10,
    program: 'ERASMUS',
    nbReviews: 0
  },
];

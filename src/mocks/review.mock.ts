import {Review} from '../models/review';

const dateToday: Date = new Date();
export const REVIEW_MOCKED: Review[] = [
  {
    universityId: 5152158977,
    email: 'fruhgrugfyrgrfgyr',
    Description: 'Très bon programme! Une expérience enrichissante et de belles rencontres.Cette destination.',
    Date: dateToday,
    Rate: 5,
  },
  {
    universityId: 5152158977,
    email: 'fruhgrugfyrgrfgyr',
    Description: 'Très satisfaite de cet échange, les cours correspondent parfaitement . Veillez à prendre vos gros pulls! ',
    Date: dateToday,
    Rate: 5,
  },

  {
    universityId: 5152158977,
    email: 'fruhgrugfyrgrfgyr',
    Description: 'Agréablement surpris par la qualité de l enseignement ainsi que la beauté du pays.',
    Date: dateToday,
    Rate: 5,
  }
];

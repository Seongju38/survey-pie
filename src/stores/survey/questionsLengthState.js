import { selector } from 'recoil';

import surveyState from './atom';

const questionsLengthState = selector({
  key: 'questionsLength',
  get: ({ get }) => {
    const questions = get(surveyState).questions;

    return questions.length;
  },
});

export default questionsLengthState;

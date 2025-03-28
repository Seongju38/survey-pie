import { selector } from 'recoil';

import getSurvey from '../../services/getSurvey';

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    const res = await getSurvey(window.location.pathname.split('/')[2]);

    return res.data;
  },
});

export default surveyState;

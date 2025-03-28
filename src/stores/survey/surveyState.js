import { selector } from 'recoil';

import mainApi from '../../services/apis/mainApi';

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    const res = await mainApi.get(
      `/surveys/${window.location.pathname.split('/')[2]}`,
    );

    return res.data;
  },
});

export default surveyState;

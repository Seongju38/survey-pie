import axios from 'axios';
import { selector } from 'recoil';

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    const res = await axios.get(
      `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`,
    );

    return res.data;
  },
});

export default surveyState;

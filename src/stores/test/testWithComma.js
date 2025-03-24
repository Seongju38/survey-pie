import { selector } from 'recoil';

import testState from './atom';

const testWithComma = selector({
  key: 'testWithComma',
  get: ({ get }) => {
    const abcdArr = get(testState);

    return abcdArr.join(',');
  },
});

export default testWithComma;

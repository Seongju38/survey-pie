import { atom } from 'recoil';

const testState = atom({
  key: 'testState',
  default: ['a', 'b', 'c', 'd'],
});

export default testState;

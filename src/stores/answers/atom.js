import { atom } from 'recoil';

const answersState = atom({
  key: 'answersState',
  default: [],
});

export default answersState;

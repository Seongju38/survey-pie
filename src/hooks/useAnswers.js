import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';

function useAnswers() {
  return useRecoilState(answersState);
}

export default useAnswers;

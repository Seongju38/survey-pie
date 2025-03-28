import { useRecoilValue } from 'recoil';

import answersState from '../stores/answers/atom';

function useAnswers() {
  return useRecoilValue(answersState);
}

export default useAnswers;

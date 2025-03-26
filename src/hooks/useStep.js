import { useParams } from 'react-router-dom';

function useStep() {
  const params = useParams();
  const step = parseInt(params.step);

  return step;
}

export default useStep;

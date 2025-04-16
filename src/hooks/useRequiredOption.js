import useCurrentQuestion from './useCurrentQuestion';

function useRequiredOption() {
  const question = useCurrentQuestion();

  return question?.required || false;
}

export default useRequiredOption;

import { useNavigate } from 'react-router-dom';

import Button from '../Button';

function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 || (
        <Button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </div>
  );
}

export default ActionButtons;

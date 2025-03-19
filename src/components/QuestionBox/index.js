import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QuestionBox({ question, questionsLength, step }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}

export default QuestionBox;

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문3 입니다.',
      desc: '설명3 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
      />
    </div>
  );
}

export default App;

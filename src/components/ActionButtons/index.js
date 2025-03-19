function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {step === 0 || <button>이전</button>}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ActionButtons;

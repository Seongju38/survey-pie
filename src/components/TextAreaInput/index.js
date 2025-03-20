import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
  width: 100%;
`;
export default TextAreaInput;

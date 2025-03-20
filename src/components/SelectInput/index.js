import styled from 'styled-components';

function SelectInput({ answer, setAnswer, options }) {
  return (
    <div>
      {options.items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}

export default SelectInput;

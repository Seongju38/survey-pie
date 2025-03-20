import styled from 'styled-components';

function Item({ children }) {
  return (
    <div>
      <label>
        <input type="checkbox" />
        {children}
      </label>
    </div>
  );
}

function SelectInput({ answer, setAnswer, options }) {
  return (
    <div>
      {options.items.map((item, index) => {
        return <Item key={index}>{item}</Item>;
      })}
    </div>
  );
}

export default SelectInput;

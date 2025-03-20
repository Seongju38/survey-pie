import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #121111;
  margin: 0;

  span {
    margin-right: 12px;
  }
`;

export default Title;

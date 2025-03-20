import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
`;

export default Button;

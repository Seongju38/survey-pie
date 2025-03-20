import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;
  color: ${PRIMARY.BUTTON.DEFAULT.COLOR};
  background: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
`;

export default Button;

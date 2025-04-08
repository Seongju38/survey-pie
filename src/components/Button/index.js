import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  min-width: 200px;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 18px;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  // & 자기 자신을 가르키는 선택자 (SCSS 문법) - 여기선 button
  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;

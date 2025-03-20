import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

// type2는 DEFAULT, HOVER, .... 관련된 변수
// function getColor(type1, type2) {
//   if (type1 === 'PRIMARY') {
//     return PRIMARY.BUTTON.DEFAULT.COLOR;
//   } else if (type1 === 'SECONDARY') {
//     return SECONDARY.BUTTON.DEFAULT.COLOR;
//   }
//   return;
// }

const colorMap = {
  PRIMARY, // === PRIMARY: PRIMARY
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;
  color: ${(props) => {
    // 이렇게 되면 코드가 너무 복잡해짐
    // if (props.type === 'PRIMARY') {
    //   return PRIMARY.BUTTON.DEFAULT.COLOR;
    // } else if (props.type === 'SECONDARY') {
    //   return SECONDARY.BUTTON.DEFAULT.COLOR;
    // }

    // 간결한 코드를 위한
    // 첫번째 방법 ) 함수
    // return getColor(props.type);

    // 두번째 방법 ) map으로 관리
    return colorMap[props.type].DEFAULT.COLOR;
  }};
  background: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
`;

export default Button;

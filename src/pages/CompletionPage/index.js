import axios from 'axios';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testWithComma from '../../stores/test/testWithComma';

function CompletionPage() {
  const test = useRecoilValue(testWithComma);

  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res.data);
  });

  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div``;

export default CompletionPage;

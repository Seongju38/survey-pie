import styled from 'styled-components';

import Bar from '../Bar';

function ProgressIndicator() {
  return (
    <ProgressIndicatorWrapper>
      <Bar />
      <Bar />
      <Bar />
      <div>2/3</div>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div``;

export default ProgressIndicator;

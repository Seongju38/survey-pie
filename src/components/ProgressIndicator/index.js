import styled from 'styled-components';

import Bar from '../Bar';

function ProgressIndicator() {
  return (
    <ProgressIndicatorWrapper>
      <Bar />
      <Bar />
      <Bar />
      <PageCount>
        <span>2</span>/3
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;

  span {
    font-weight: bold;
    color: #121111;
  }
`;

export default ProgressIndicator;

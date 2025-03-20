import styled from 'styled-components';

const a = 13;

function CompletionPage() {
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: ${a === 123 ? '4em' : '1em'};
`;

export default CompletionPage;

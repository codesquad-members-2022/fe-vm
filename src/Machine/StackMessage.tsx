import styled from 'styled-components';

const MessageWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function StackMessage(): JSX.Element {
  return (
    <>
      <MessageWrapper></MessageWrapper>
    </>
  );
}

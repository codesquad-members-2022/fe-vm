import styled from 'styled-components';

const Message = () => {
  return <MessageItem>500원이 투입됐음.</MessageItem>;
};

const MessageItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.small};
  padding: ${({ theme }) => theme.padding.medium};
  cursor: default;
`;

export default Message;

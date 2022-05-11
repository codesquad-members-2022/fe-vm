import styled from 'styled-components';

const Message = ({ text }) => {
  return <MessageItem>{text}</MessageItem>;
};

const MessageItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.small};
  padding: ${({ theme }) => theme.padding.medium};
  cursor: default;
`;

export default Message;

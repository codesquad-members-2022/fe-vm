import styled from 'styled-components';

export const MessageItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.small};
  padding: ${({ theme }) => theme.padding.medium};
  cursor: default;
`;

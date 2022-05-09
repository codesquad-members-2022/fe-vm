import styled from 'styled-components';

export const flexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const productText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

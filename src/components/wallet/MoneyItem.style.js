import styled from 'styled-components';

const Container = styled.li`
  font-size: 24px;
`;

const MoneyBtn = styled.button`
  display: block;
  width: ${({ coin }) => (coin ? '85px' : '90%')};
  margin: 0 auto;
  line-height: ${({ coin }) => (coin ? '85px' : '65px')};
  border: 1px solid #333;
  border-radius: ${({ coin }) => (coin ? '50%' : 0)};
  background: ${({ color }) => color};
  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.4;
  }
`;

const MoneyQuantity = styled.span`
  display: block;
  margin-top: 25px;
`;

export { Container, MoneyBtn, MoneyQuantity };

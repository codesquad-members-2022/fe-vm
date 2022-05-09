import styled from 'styled-components';
import Menu from './Menu';
import Calculator from './Calculator';

const VendingMachine = () => {
  return (
    <Container>
      <Menu />
      <Calculator />
    </Container>
  );
};

const Container = styled.main`
  width: 1440px;
  display: flex;
  margin-top: ${({ theme }) => theme.margin.large};
  border: 0.3rem solid ${({ theme }) => theme.color.black};
`;

export default VendingMachine;

import styled from 'styled-components';

const Container = styled.div`
  margin-top: 12vh;
  text-align: center;
`;

const MoneyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 60px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 22px;
  border-radius: 8px;
`;

export { Container, MoneyList };

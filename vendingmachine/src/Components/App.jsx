import Header from './Header';
import styled from 'styled-components';
import { flexCenter } from '../styled-components/util';
import VendingMachine from './VendingMachine';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <VendingMachine />
      </Container>
    </>
  );
};

const Container = styled(flexCenter)``;

export default App;

import Header from './Header';
import styled from 'styled-components';
import { FlexCenter } from '../styled-components/util';
import VendingMachine from './VendingMachine';
import Wallet from './Wallet';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Container>
    </>
  );
};

const Container = styled(FlexCenter)``;

export default App;

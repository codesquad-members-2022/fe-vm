import React, { useContext } from 'react';
import styled from 'styled-components';
import { LoadingContext } from 'components/App';
import ControlPanel from 'components/ControlPanel';
import Products from 'components/Products';
import Loading from 'components/Loading';

function Home() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <Wrap>
      {isLoading ? <Loading /> : null}
      <Products />
      <ControlPanel />
    </Wrap>
  );
}

export default Home;

const Wrap = styled.div({
  display: 'flex',
});

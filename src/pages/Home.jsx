import React from 'react';
import styled from 'styled-components';
import ControlPanel from 'components/ControlPanel';
import Products from 'components/Products';

function Home() {
  return (
    <Wrap>
      <Products />
      <ControlPanel />
    </Wrap>
  );
}

export default Home;

const Wrap = styled.div({
  display: 'flex',
});

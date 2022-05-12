import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/container';
import VendingForm from './VendingForm';
import VendingLog from './VendingLog';

const VendingAside = (props) => {
  return (
    <Container
      width="40%"
      height="90%"
      flexInfo={['column', 'center', 'space-around']}
    >
      <VendingForm />
      <VendingLog />
    </Container>
  );
};

export default VendingAside;

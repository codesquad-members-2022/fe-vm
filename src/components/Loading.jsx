import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingContext } from 'components/App';
import DELAY_MS from 'constants/delay';

function Loading() {
  const { setLoading } = useContext(LoadingContext);
  useEffect(handleLoading);

  return (
    <Wrap>
      <Pharase>상품 구매중입니다.</Pharase>
    </Wrap>
  );

  function handleLoading() {
    setTimeout(() => setLoading(false), DELAY_MS.LOADING);
  }
}

export default Loading;

const Wrap = styled.div`
  position: fixed;
  background-color: gray;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: auto auto;
  opacity: 0.5;
`;

const Pharase = styled.h1`
  color: white;
  text-align: center;
`;

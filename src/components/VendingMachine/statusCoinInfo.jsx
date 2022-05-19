import React from 'react';
import styled from 'styled-components';
import { Color } from 'Assets/Style/Common';

const CoinStatusInfo = () => {
  return (
    <CoinStatusBox>
      <form>
        <CoinInfoTitle>총 투입금액</CoinInfoTitle>
        <CoinInfoText>4,000원</CoinInfoText>
        <CoinReturnBtn>반환</CoinReturnBtn>
      </form>
    </CoinStatusBox>
  );
};

const CoinReturnBtn = styled.button`
  font-family: 'Noto Sans KR';
  position: absolute;
  width: 8rem;
  height: 4.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  left: 40rem;
  top: 2.45rem;
  border: 1px solid ${Color.lightGray};
  border-radius: 1rem;
  background-color: ${Color.backGroundGray};
  color: ${Color.white};
`;

const CoinInfoText = styled.span`
  width: 15.5rem;
  height: 6.4rem;
  line-height: 6.4rem;
  font-size: 4.4rem;
  font-weight: bold;
  color: ${Color.white};
`;

const CoinInfoTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  color: #6e757d;
`;

const CoinStatusBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  heigh: 9.3rem;
`;

export default CoinStatusInfo;

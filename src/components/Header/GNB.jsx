import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { F_center, Default_shadow, Color } from 'Assets/Style/Common';

const GNB = () => {
  const navigate = useNavigate();

  const VMBtnClickHandler = () => {
    navigate('/vm');
  };
  const WalletBtnClickHandler = () => {
    navigate('/wallet');
  };

  return (
    <form>
      <GNBdiv>
        <GNBRadioButton type="radio" name="GNB" id="VMPageSelectBtn" />
        <GNBLabel
          onClick={VMBtnClickHandler}
          htmlFor="VMPageSelectBtn"
          className="VMSelectBtn">
          자판기
        </GNBLabel>
        <GNBRadioButton type="radio" name="GNB" id="WalletPageSelectBtn" />
        <GNBLabel
          onClick={WalletBtnClickHandler}
          htmlFor="WalletPageSelectBtn"
          className="WalletSelectBtn">
          지갑
        </GNBLabel>
      </GNBdiv>
    </form>
  );
};

const GNBdiv = styled.div`
  ${F_center};
  justify-content: space-around;
  width: 40rem;
  height: 6.9rem;
  background-color: ${Color.white};
  ${Default_shadow}
  border-radius: 10rem;
  > #VMPageSelectBtn:checked ~ .VMSelectBtn {
    transition: 1s;
    background-color: ${Color.yellowGreen};
  }
  > #WalletPageSelectBtn:checked ~ .WalletSelectBtn {
    transition: 1s;
    background-color: ${Color.yellowGreen};
  }
`;

const GNBRadioButton = styled.input`
  display: none;
`;

const GNBLabel = styled.label`
  ${F_center}
  width: 20rem;
  height: 6.9rem;
  border-radius: 10rem;
  font-size: 2.8rem;
  font-weight: 700;
  cursor: pointer;
`;
export default GNB;

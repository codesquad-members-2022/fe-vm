import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { F_center, Color } from 'Assets/Style/Common';

const GNB = () => {
  const { pathname } = useLocation();
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
        <Slide className="slide" pathname={pathname} />
        <GNBRadioButton
          type="radio"
          name="GNB"
          id="VMPageSelectBtn"
          checked={true}
          readOnly
        />
        <GNBLabel
          onClick={VMBtnClickHandler}
          htmlFor="VMPageSelectBtn"
          className="VMSelectBtn">
          자판기
        </GNBLabel>
        <GNBRadioButton
          type="radio"
          name="GNB"
          id="WalletPageSelectBtn"
          readOnly
        />
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

const Slide = styled.div`
  background-color: ${Color.yellowGreen};
  position: absolute;
  width: 20rem;
  height: 6.9rem;
  border-radius: 10rem;
  transition: 0.3s;
  box-shadow: 0 0.3rem 2rem rgba(79, 255, 181, 0.5);
  ${({ pathname }) => {
    if (pathname !== '/wallet') {
      return 'left:50%;transform:translateX(-100%)';
    }
    return 'right: 0px';
  }}
`;

const GNBdiv = styled.div`
  ${F_center};
  $this: &;
  margin-top: 3rem;
  justify-content: space-around;
  position: relative;
  width: 40rem;
  height: 6.9rem;
  background-color: ${Color.headerGray};
  box-shadow: 0 0.4rem 3rem rgba(19, 15, 37, 0.1);
  border-radius: 10rem;
  #VMPageSelectBtn:checked ~ .VMSelectBtn {
    color: black;
  }
  #WalletPageSelectBtn:checked ~ .WalletSelectBtn {
    color: black;
  }
`;

const GNBRadioButton = styled.input`
  display: none;
`;

const GNBLabel = styled.label`
  ${F_center}
  color: #6E757D;
  width: 20rem;
  height: 6.9rem;
  border-radius: 10rem;
  font-size: 2.8rem;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
`;
export default GNB;

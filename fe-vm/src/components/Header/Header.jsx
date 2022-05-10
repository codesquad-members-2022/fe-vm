import styled from "styled-components";
import { useState } from "react";
import Mode from "./Mode";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(true);
  const [walletClicked, setWalletClicked] = useState(false);

  const turnOffAll = () => {
    setMenuClicked(false);
    setWalletClicked(false);
  };

  return (
    <HeaderContainer>
      <Mode
        mode="자판기"
        isClicked={menuClicked}
        setClicked={setMenuClicked}
        turnOffAll={turnOffAll}
      />
      <Mode
        mode="지갑"
        isClicked={walletClicked}
        setClicked={setWalletClicked}
        turnOffAll={turnOffAll}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 2rem 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Header;

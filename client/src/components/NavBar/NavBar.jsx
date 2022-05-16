import React, { useContext, useState } from "react";
import styled from "styled-components";
import { WalletContext } from "../../store/WalletStore";
import NavBarButton from "./Buttons/NavBarButton";
import SelectedNavBarButton from "./Buttons/SelectedNavBarButton";

export default function NavBar() {
  //새로고침 할 때 url 주소에 따라 상태 다르게 설정
  const [isSelected, setIsSelected] = useState(
    checkLocationPath("/", "/wallet")
  );
  const selectVM = () => setIsSelected(false);
  const selectWallet = () => setIsSelected(true);

  //뒤로가기나 앞으로가기가 발생했을 때 해당 주소에 따라 isSelected 값 설정
  window.addEventListener("popstate", () => {
    setIsSelected(checkLocationPath("/", "/wallet"));
  });

  const walletContext = useContext(WalletContext);
  const { total } = walletContext;

  return (
    <StyledNavBar>
      {!isSelected ? (
        <>
          <SelectedNavBarButton
            clickHandler={selectVM}
            link="/"
            text="자판기"
          ></SelectedNavBarButton>
          <NavBarButton
            clickHandler={selectWallet}
            link="/wallet"
            text={`지갑(${total})`}
          ></NavBarButton>
        </>
      ) : (
        <>
          <NavBarButton
            clickHandler={selectVM}
            link="/"
            text="자판기"
          ></NavBarButton>
          <SelectedNavBarButton
            clickHandler={selectWallet}
            link="/wallet"
            text={`지갑(${total})`}
          ></SelectedNavBarButton>
        </>
      )}
    </StyledNavBar>
  );
}

function checkLocationPath(getFalsePath, getTruePath) {
  if (window.location.pathname === getFalsePath) return false;
  else if (window.location.pathname === getTruePath) return true;
}

const StyledNavBar = styled.nav`
  display: flex;
  width: 300px;
  height: 70px;
  margin: 50px auto;
  justify-contents: center;
  align-items: center;
`;

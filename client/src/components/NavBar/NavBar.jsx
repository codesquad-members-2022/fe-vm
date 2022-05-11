import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavButtonVM from "./Buttons/NavButtonVM";
import NavButtonWallet from "./Buttons/NavButtonWallet";
import SelectedNavButtonVM from "./Buttons/SelectedNavButtonVM";
import SelectedNavButtonWallet from "./Buttons/SelectedNavButtonWallet";

export default function NavBar() {
  // const [isSelected, setIsSelected] = useState(0)
  const [isSelected, setIsSelected] = useState(
    () => JSON.parse(window.localStorage.getItem("isSelected")) || 0
  );
  const selectVM = () => setIsSelected(0);
  const selectWallet = () => setIsSelected(1);

  useEffect(() => {
    window.localStorage.setItem("isSelected", JSON.stringify(isSelected));
  }, [isSelected]);

  return (
    <StyledNavBar>
      {!isSelected ? (
        <>
          <SelectedNavButtonVM selectVM={selectVM} />
          <NavButtonWallet selectWallet={selectWallet} />
        </>
      ) : (
        <>
          <NavButtonVM selectVM={selectVM} />
          <SelectedNavButtonWallet selectWallet={selectWallet} />
        </>
      )}
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  display: flex;
  width: 300px;
  height: 70px;
  margin: 50px auto;
  justify-contents: center;
  align-items: center;
`;

export const StyledNavButton = styled.button`
  width: 150px;
  height: 70px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
`;

export const StlyedSelectedNavButton = styled.button`
  width: 150px;
  height: 70px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
  background-color: gray;
  color: white;
`;

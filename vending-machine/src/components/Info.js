import React from "react";
import Budget from "./Budget";
import ReturnBtn from "./ReturnBtn";
import Status from "./Status";
import styled from "styled-components";
import { HeightSort } from "../style/Globalstyles";
import Inlet from "./Inlet";

function Info() {
  return (
    <InfoWrap>
      <Budget></Budget>
      <Inlet></Inlet>
      <ReturnBtn></ReturnBtn>
      <Status></Status>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  height: 100%;
  flex-direction: column;
  width: 400px;
  ${HeightSort}
`;
export default Info;

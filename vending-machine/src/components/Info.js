import React from "react";
import Budget from "./Budget";
import ReturnBtn from "./ReturnBtn";
import Status from "./Status";
import styled from "styled-components";

function Info() {
  return (
    <InfoWrap>
      <Budget></Budget>
      <ReturnBtn></ReturnBtn>
      <Status></Status>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
`;
export default Info;

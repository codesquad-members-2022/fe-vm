import React from "react";
import styled from "styled-components";

export default function MessageContainer() {
  return <StyledMessageContainer>Message</StyledMessageContainer>;
}

const StyledMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 25px 0;
  padding: 15px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: bold;
`;

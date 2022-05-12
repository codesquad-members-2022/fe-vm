import React from "react";
import { StyledInformation, InputPrice, ChangeButton, ActionLog } from "./Information.styled";

function Information() {
  return (
    <StyledInformation>
      <InputPrice placeholder="0"></InputPrice>
      <ChangeButton>
        <p>반환</p>
      </ChangeButton>
      <ActionLog></ActionLog>
    </StyledInformation>
  );
}

export { Information };

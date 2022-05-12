import React from "react";
import styled from "styled-components";

export default function MenuImage({ imageURL, name }) {
  return (
    <StyledMenuImageFigure>
      <StyledImage src={imageURL} alt={name} />
    </StyledMenuImageFigure>
  );
}

const StyledMenuImageFigure = styled.figure`
  width: 80px;
  height: 120px;
  margin: 5px 5px 0 5px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

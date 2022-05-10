import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 3.5vh;
  margin-top: 3.5vh;
`;

const HeaderBtn = styled.div`
  display: flex;
  width: 10vw;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #d3d3d3;
  margin: 0 1vw 0 1vw;
  color: black;
`;

export const HeaderBtns = ({ info }) => {
  return <HeaderBtn>{info}</HeaderBtn>;
};

import styled from "styled-components";
import Message from "./Message";
import Price from "./Price";

const Info = () => {
  return (
    <InfoContainer>
      <Price />
      <ReturnButton>반환</ReturnButton>
      <Message />
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 600px;
  padding: 4rem;
`;

const ReturnButton = styled.div`
  margin: 8rem 0;
  border: 0.3rem solid black;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
`;

export default Info;

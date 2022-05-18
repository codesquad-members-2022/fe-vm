import styled from "styled-components";

const StyledInformation = styled.div`
  width: 550px;
  border: 1px solid black;
`;

const InputPrice = styled.input`
  margin: 20px 20px 0 20px;
  height: 50px;
  width: 480px;
  text-align: right;
  font-size: 20px;
  padding-right: 20px;

  ::placeholder {
    font-size: 20px;
  }
`;

const TotalInputPrice = styled.div`
  margin: 10px 20px 20px 20px;
  height: 50px;
  width: 480px;
  font-size: 20px;
  padding-right: 20px;
  text-align: right;
  line-height: 50px;
  border: 1px solid black;
`;

const ChangeButton = styled.button`
  height: 50px;
  width: 500px;
  margin: 20px;
  border: 2px solid black;
  p {
    text-align: center;
    margin: 0 auto;
  }
`;

const ActionLog = styled.div`
  margin: 20px;
  border: 1px solid blue;
  height: 400px;
  width: 500px;
`;

export { StyledInformation, InputPrice, TotalInputPrice, ChangeButton, ActionLog };

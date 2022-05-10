import styled from "styled-components";

const Mode = ({ mode, isClicked, setClicked }) => {
  const toggleClicked = () => {
    setClicked(true);
  };

  return (
    <ModeContainer onClick={toggleClicked} isClicked={isClicked}>
      {mode}
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  padding: 1rem 2rem;
  font-size: 2rem;
  height: 30%;
  border: 1px solid black;
  background-color: ${(props) => (props.isClicked ? "#434343" : "#FFFFFF")};
  color: ${(props) => (props.isClicked ? "#FFFFFF" : "#000000")};
  cursor: pointer;
`;

export default Mode;

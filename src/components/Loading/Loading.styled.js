import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 1.5rem solid ${({ theme: { colors } }) => colors.white};
  border-top-color: ${({ theme: { colors } }) => colors.darkblue};
  animation: ${rotate} 1s linear infinite;
`;

const Text = styled.p`
  ${({ theme: { whitespace, colors } }) => `
    padding: ${whitespace.default};
    background-color: ${colors.white};
  `};
  margin-top: 1rem;
  border-radius: 0.5rem;
`;

export { Wrapper, LoadingSpinner, Text };

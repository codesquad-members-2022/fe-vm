import { Rings } from "react-loader-spinner";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingContainer>
      <Rings color="#0ead69" height={64} width={110} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export { Loading };

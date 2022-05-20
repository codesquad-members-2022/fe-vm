import styled from 'styled-components';

const LoadingWrapper = styled.div`
  height: 200px;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ${({ theme }) => theme.mixins.flexBox()};
  .loading-spinner {
    text-align: center;
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;

export default function Loading(): JSX.Element {
  return (
    <LoadingWrapper>
      <div className="loading-spinner"></div>
    </LoadingWrapper>
  );
}

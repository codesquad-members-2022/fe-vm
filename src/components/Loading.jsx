import styled from 'styled-components';

const Loading = () => (
  <LoadingWrapper>
    <LoadingImage src='./nyan-cat.gif' alt='loading' />
  </LoadingWrapper>
);

const LoadingImage = styled.img`
  width: 100%;
`;
const LoadingWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Loading;

import styled from 'styled-components';

const Modal = () => {
  return (
    <Backdrop>
      <ModalContainer>LOADING</ModalContainer>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  background: transparent;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const ModalContainer = styled.div`
  background: red;
  width: 40vw;
  height: 30vh;
  background: red;
`;

export default Modal;

import styled from 'styled-components';

const Modal = () => {
  return (
    <Backdrop>
      <ModalContainer>
        <StyledParagraph>구매중입니다.</StyledParagraph>
      </ModalContainer>
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
  display: grid;
  background: ${({ theme }) => theme.colors.deepNavy};
  color: #fff;
  width: 70vw;
  height: 30vh;
`;

const StyledParagraph = styled.p`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;
export default Modal;

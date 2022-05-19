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
  width: 80vw;
  height: 80vh;
  z-index: 1;
`;

const ModalContainer = styled.div`
  display: grid;
  place-content: center;
  background: ${({ theme }) => theme.colors.deepNavy};
  color: #fff;
  width: 40vw;
  height: 30vh;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;
export default Modal;

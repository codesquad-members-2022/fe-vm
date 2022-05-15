import React from "react";
import ModalPortal from "../Portal";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  function handleInsertCredit(event) {
    event.preventDefault();
    onClose();
    // insertedCredit state 변경
  }

  function handleCancelBtn() {
    onClose();
  }

  return (
    <ModalPortal>
      <Background>
        <Content>
          <div>값을 입력해주세요</div>
          <form>
            <input />
          </form>
          {/* 값 입력 여부에 따라 버튼 disabled */}
          <button onClick={handleInsertCredit}>투입</button>
          <button onClick={handleCancelBtn}>취소</button>
        </Content>
      </Background>
    </ModalPortal>
  );
};

const Background = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  text-align: center;
`;

const Content = styled.div`
  width: 500px;
  height: 200px;
  /* border: 1px solid black; */
  box-shadow: 0px 8px 1000px 0px rgba(37, 27, 154, 0.88);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export default Modal;

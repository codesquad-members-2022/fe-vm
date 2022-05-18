import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import * as S from './style';

function WindowModal({ children, show, handleOpenModal }) {
  const stopPropagation = useCallback(event => {
    // 없으면 이벤트가 천파되어 모달 내부를 눌러도 모달이 닫힘
    event.stopPropagation();
  }, []);

  const handleKeyEsc = useCallback(
    event => {
      if (event.keyCode === 27) {
        handleOpenModal();
      }
    },
    [handleOpenModal],
  );
  if (!show) {
    return null;
  }
  return (
    <Potal>
      <S.ModalWrapper onClick={handleOpenModal} onKeyDown={handleKeyEsc} tabIndex={0}>
        <S.ModalContainer onClick={stopPropagation}>
          <S.CloseModalButton onClick={handleOpenModal}>&times;</S.CloseModalButton>
          {children}
        </S.ModalContainer>
      </S.ModalWrapper>
    </Potal>
  );
}

WindowModal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default WindowModal;

function Potal({ children }) {
  useEffect(() => {
    // 화면 스크롤 방지
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      // 스크롤 방지 해제
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: "";  top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const rootElement = document.getElementById('modal');
  return createPortal(children, rootElement);
}

import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalContainer, CloseModalButton } from './style';
import * as S from './style';

function Potal({ children }) {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: "";  top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  // id가 modal인 DOM 노드에 모달 창을 render합니다.
  const rootElement = document.getElementById('modal');
  return createPortal(children, rootElement);
}

function WindowModal({ children, show, handleOpenModal }) {
  const stopPropagation = useCallback(e => {
    e.stopPropagation();
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

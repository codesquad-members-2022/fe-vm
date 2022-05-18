import React from 'react';
import PropTypes from 'prop-types';
import WindowModal from 'components/WindowModal';
import { requestLogin } from 'context/User/action';
import { useUserContext } from 'context/User';
import userApi from 'api/user';

function LoginModal({ isModalOpen, handleOpenModal }) {
  const { userDispatch } = useUserContext();
  const handleClickLoginButton = async () => {
    try {
      const { data } = await userApi.login();
      requestLogin(userDispatch, data);
    } catch (error) {
      console.error(error);
    }
    handleOpenModal();
  };

  return (
    <WindowModal show={isModalOpen} handleOpenModal={handleOpenModal}>
      <button type="button" onClick={handleClickLoginButton}>
        msw 임시 로그인 버튼
      </button>
    </WindowModal>
  );
}

LoginModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default LoginModal;

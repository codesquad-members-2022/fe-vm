import React from 'react';
import PropTypes from 'prop-types';
import WindowModal from 'components/WindowModal';
import { requestLogin } from 'context/User/action';
import { useUserContext } from 'context/User';
import userApi from 'api/user';
import { useNotification } from 'context/Notification';
import { notifyNewMessage } from 'context/Notification/action';
import NOTIFY_TYPE from 'constant/notification';

function LoginModal({ isModalOpen, handleOpenModal }) {
  const { userDispatch } = useUserContext();
  const { notifyDispatch } = useNotification();
  const handleClickLoginButton = async () => {
    try {
      const { data } = await userApi.login();
      requestLogin(userDispatch, data);
      notifyNewMessage(notifyDispatch, '로그인 성공!', NOTIFY_TYPE.Success);
    } catch (error) {
      notifyNewMessage(notifyDispatch, error.errorMessage, NOTIFY_TYPE.Error);
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

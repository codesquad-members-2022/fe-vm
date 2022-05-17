import { useState } from 'react';

const useModal = (initialMode = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialMode);
  const handleOpenModal = () => setIsModalOpen(prev => !prev);
  return [isModalOpen, handleOpenModal, setIsModalOpen];
};

export default useModal;

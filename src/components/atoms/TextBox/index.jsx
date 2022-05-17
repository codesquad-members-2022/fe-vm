import React from 'react';

import * as S from '@components/atoms/TextBox/TextBox.style';

const TextBox = ({ text }) => {
  return (
    <S.Container>
      <span>{text}</span>
    </S.Container>
  );
};

export default TextBox;

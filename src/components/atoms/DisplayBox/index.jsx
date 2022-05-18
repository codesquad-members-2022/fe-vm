import React from 'react';

import * as S from '@components/atoms/DisplayBox/DisplayBox.style';

export const DISPLAY_BOX_SIZE = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const DisplayBox = ({ size, title, content }) => {
  return (
    <S.Container size={size}>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default DisplayBox;

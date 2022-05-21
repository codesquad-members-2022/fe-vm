import React from 'react';

import PropTypes from 'prop-types';

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

DisplayBox.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default DisplayBox;

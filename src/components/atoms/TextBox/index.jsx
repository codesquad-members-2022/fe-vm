import React from 'react';

import PropTypes from 'prop-types';

import * as S from '@components/atoms/TextBox/TextBox.style';

const TextBox = ({ text }) => {
  return (
    <S.Container>
      <span>{text}</span>
    </S.Container>
  );
};

TextBox.propTypes = {
  text: PropTypes.string,
};

export default TextBox;

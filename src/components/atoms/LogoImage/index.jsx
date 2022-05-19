import React from 'react';
import logo from 'assets/Image/Logo.gif';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const LogoImage = ({ isFlipped, ...props }) => {
  return <Image src={logo} isFlipped={isFlipped} />;
};

const Image = styled.img`
  width: 180px;
  height: 73px;
  ${({ isFlipped }) => isFlipped && FlippedTransform};
`;

const FlippedTransform = css`
  transform: scaleX(-1);
`;

LogoImage.defaultProps = {
  isFlipped: false,
};

LogoImage.propTypes = {
  isFlipped: PropTypes.bool,
};

export default LogoImage;

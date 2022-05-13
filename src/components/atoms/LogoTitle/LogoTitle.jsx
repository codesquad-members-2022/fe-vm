import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './LogoTitle.style';

const LogoTitle = ({ contents, ...props }) => {
  return <StyledTitle>{contents}</StyledTitle>;
};

LogoTitle.defaultProps = {
  contents: 'Hem Store',
};

LogoTitle.propTypes = {
  contents: PropTypes.string,
};

export default LogoTitle;

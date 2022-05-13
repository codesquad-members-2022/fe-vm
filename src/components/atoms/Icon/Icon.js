import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as IconImporter from 'components/atoms/Icon/IconImporter';

const Icon = ({ iconName, ...props }) => {
  return <StyledIcon src={IconImporter[iconName] || IconImporter.defaultIcon}></StyledIcon>;
};

const StyledIcon = styled.img`
  width: 1em;
  height: 1em;
`;

Icon.defaultProps = {
  iconName: 'caretDown',
};

Icon.propTypes = {
  iconName: PropTypes.string,
};

export default Icon;

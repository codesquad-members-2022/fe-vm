import React from 'react';
import PropTypes from 'prop-types';
import LogoTitle from 'components/atoms/LogoTitle/LogoTitle';
import LogoImage from 'components/atoms/LogoImage/LogoImage';
import * as Styled from 'components/molecules/Logo/Logo.style';

const LogoImageIsFlipped = {
  store: false,
  pocket: true,
};

const LogoTitleContents = {
  store: 'Hem Store',
  pocket: 'Hem Pocket',
};

const Logo = ({ type, ...props }) => {
  return (
    <Styled.Logo type={type} flexType="centerAround">
      {!LogoImageIsFlipped[type] && <LogoImage isFlipped={LogoImageIsFlipped[type]} />}
      <LogoTitle contents={LogoTitleContents[type]} />
      {LogoImageIsFlipped[type] && <LogoImage isFlipped={LogoImageIsFlipped[type]} />}
    </Styled.Logo>
  );
};

Logo.defaultProps = {
  type: 'store',
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default Logo;

import React from 'react';
import LogoImage from 'components/atoms/LogoImage/LogoImage';

export default {
  title: 'Atoms/LogoImage',
  component: LogoImage,
};

const Template = args => <LogoImage {...args} />;

export const FlippedLogoImage = Template.bind({});
FlippedLogoImage.args = {
  isFlipped: true,
};

export const DefaultLogoImage = () => <LogoImage />;

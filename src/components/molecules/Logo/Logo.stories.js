import React from 'react';
import Logo from 'components/molecules/Logo';

export default {
  title: 'Molecules/Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const HemPocketLogo = Template.bind({});
HemPocketLogo.args = {
  type: 'pocket',
};

export const HemStoreLogo = () => <Logo />;

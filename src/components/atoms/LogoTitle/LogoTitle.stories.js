import React from 'react';
import LogoTitle from 'components/atoms/LogoTitle';

export default {
  title: 'Atoms/LogoTitle',
  component: LogoTitle,
};

const Template = args => <LogoTitle {...args} />;

export const HemPocketTitle = Template.bind({});
HemPocketTitle.args = {
  contents: 'Hem Pocket',
};

export const DefaultLogoTitle = () => <LogoTitle />;

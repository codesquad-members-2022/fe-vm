import React from 'react';
import Button from 'components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    sizeType: {
      options: ['thin', 'small', 'medium', 'large', 'xLarge'],
      control: { type: 'radio' },
    },
    borderType: {
      options: ['default', 'rounded'],
      control: { type: 'radio' },
    },
    colorType: {
      options: ['default', 'active', 'point', 'soldOut', 'disabled'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: 'boolean',
    },
  },
};

const Template = args => <Button {...args} />;

export const thinButtonActive = Template.bind({});
thinButtonActive.args = {
  sizeType: 'thin',
  borderType: 'rounded',
  colorType: 'active',
  children: 'Thin',
};
thinButtonActive.storyName = 'thinButton-Active';

export const thinButtonDisabled = Template.bind({});
thinButtonDisabled.args = {
  sizeType: 'thin',
  borderType: 'rounded',
  colorType: 'active',
  disabled: true,
  children: 'Thin',
};
thinButtonDisabled.storyName = 'thinButton-Disabled';

export const thinButtonSoldOut = Template.bind({});
thinButtonSoldOut.args = {
  sizeType: 'thin',
  borderType: 'rounded',
  colorType: 'soldOut',
  children: 'Thin',
};
thinButtonSoldOut.storyName = 'thinButton-SoldOut';

export const smallButton = Template.bind({});
smallButton.args = {
  sizeType: 'small',
  borderType: 'default',
  colorType: 'point',
  children: '추가',
};
smallButton.storyName = 'smallButton-Point';

export const mediumButtonPoint = Template.bind({});
mediumButtonPoint.args = {
  sizeType: 'medium',
  borderType: 'default',
  colorType: 'point',
  children: '자판기',
};
mediumButtonPoint.storyName = 'mediumButton-Point';

export const mediumButtonDisabled = Template.bind({});
mediumButtonDisabled.args = {
  sizeType: 'medium',
  borderType: 'default',
  colorType: 'disabled',
  children: '지갑',
};
mediumButtonDisabled.storyName = 'mediumButton-Disabled';

export const largeButton = Template.bind({});
largeButton.args = {
  sizeType: 'xLarge',
  borderType: 'rounded',
  children: '10원',
};
largeButton.storyName = 'largeButton';

export const ButtonStory = () => <Button />;

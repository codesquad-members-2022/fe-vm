import Icon, { ICON_NAME } from '@components/atoms/Icon';

export default {
  title: 'Atom/Icon',
  component: Icon,
  args: {
    iconName: ICON_NAME.SELECT_CLOSE,
  },
  argTypes: {
    iconName: {
      control: {
        type: 'radio',
      },
      options: [ICON_NAME.SELECT_CLOSE, ICON_NAME.SELECT_OPEN],
    },
  },
};

export const Default = args => <Icon {...args} />;

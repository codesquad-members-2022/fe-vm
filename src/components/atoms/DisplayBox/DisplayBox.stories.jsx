import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';

export default {
  title: 'Atom/DisplayBox',
  component: DisplayBox,
  args: {
    size: DISPLAY_BOX_SIZE.MEDIUM,
    title: '총 투입 금액',
    content: '3,500원',
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: [DISPLAY_BOX_SIZE.MEDIUM, DISPLAY_BOX_SIZE.LARGE],
    },
    title: {
      control: {
        type: 'text',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = args => <DisplayBox {...args} />;

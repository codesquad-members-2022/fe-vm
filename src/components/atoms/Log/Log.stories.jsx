import Log, { LOG_TYPE } from '@components/atoms/Log';

export default {
  title: 'Atom/Log',
  component: Log,
  args: {
    type: LOG_TYPE.NORMAL,
    content: '500원이 투입되었습니다.',
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: [LOG_TYPE.NORMAL, LOG_TYPE.ERROR],
    },
    content: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = args => <Log {...args} />;

import TextBox from '@components/atoms/TextBox/index';

export default {
  title: 'Atom/TextBox',
  component: TextBox,
  args: {
    text: '0개',
  },
};

export const Default = args => <TextBox {...args} />;

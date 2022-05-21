import InputBox from '@components/atoms/InputBox';

export default {
  title: 'Atom/InputBox',
  component: InputBox,
  args: {
    inputValue: 0,
    saveInputValue: () => {},
  },
  argTypes: {
    inputValue: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = args => <InputBox {...args} />;

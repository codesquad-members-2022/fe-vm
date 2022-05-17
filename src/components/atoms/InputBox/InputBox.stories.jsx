import InputBox from '@components/atoms/InputBox';

export default {
  title: 'Atom/InputBox',
  component: InputBox,
  args: {
    inputValue: 0,
    setInputValue: () => {},
  },
  argTypes: {
    inputValue: {
      type: 'text',
    },
  },
};

export const Default = args => <InputBox {...args} />;

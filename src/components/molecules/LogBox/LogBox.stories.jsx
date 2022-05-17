import LogBox from '@components/molecules/LogBox';
import logs from '@data/logs';

export default {
  title: 'Molecule/LogBox',
  component: LogBox,
  args: {
    logs,
  },
};

export const Default = args => <LogBox {...args} />;

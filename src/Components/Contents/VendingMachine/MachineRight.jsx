import PickUpBox from './PickUpBox';
import MessageBox from '../MessageBox';
import PayBox from '../PayBox';

export default function MachineRight() {
  return (
    <div>
      <PayBox />
      <PickUpBox />
      <MessageBox />
    </div>
  );
}

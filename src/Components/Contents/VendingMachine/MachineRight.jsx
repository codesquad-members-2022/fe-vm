import PickUpBox from './PickUpBox';
import MessageBox from '../MessageBox';
import PayBox from '../PayBox';

export default function MachineRight({ payTotal, payMoney, message }) {
  return (
    <div>
      <PayBox payTotal={payTotal} payMoney={payMoney} message={message} />
      <PickUpBox />
      <MessageBox message={message.value} />
    </div>
  );
}

import InputValue from "../Input/InputValue";
import ReturnButton from "../ReturnButton/ReturnButton";
import MessageView from "../MessageView/MessageView";
import CurrentPrice from "../CurrentPrice/CurrentPrice";
const Information = () => {
  return (
    <div>
      <CurrentPrice />
      <InputValue />
      <ReturnButton />
      <MessageView />
    </div>
  );
};

export default Information;

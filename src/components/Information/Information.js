import InputValue from "../Input/InputValue";
import ReturnButton from "../ReturnButton/ReturnButton";
import MessageView from "../MessageView/MessageView";
import CurrentPrice from "../CurrentPrice/CurrentPrice";
import "./Information.css";
const Information = () => {
  return (
    <div className="information-wrapper">
      <CurrentPrice />
      <InputValue />
      <ReturnButton />
      <MessageView />
    </div>
  );
};

export default Information;

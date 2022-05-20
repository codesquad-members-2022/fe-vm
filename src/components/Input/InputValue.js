import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { MessageContext } from "../../context/MessageContext";
import { MoneyContext } from "../../context/MoneyContext";
import "./InputValue.css";

const InputValue = () => {
  const { inputPrice, setInputPrice } = useContext(InputContext);
  const { setMessage } = useContext(MessageContext);
  const { accumulatedPrice, setAccumulatedPrice } = useContext(MoneyContext);

  const writePriceHandler = (event) => {
    setInputPrice(Number(event.target.value));
  };

  const insertPriceHandler = (event) => {
    event.preventDefault();
    insertMessage(inputPrice);
    setAccumulatedPrice(accumulatedPrice + inputPrice);
    setInputPrice("");
  };

  const insertMessage = (inputPrice) => {
    const newMessage = {
      content: inputPrice + "투입",
    };
    setMessage((prev) => [newMessage.content, ...prev]);
  };

  return (
    <div className="vendingmachine-input-wrapper">
      <form onSubmit={insertPriceHandler}>
        <input
          className="input-value"
          type="number"
          min="0"
          placeholder="0원"
          onChange={writePriceHandler}
          value={inputPrice}
        />
      </form>
    </div>
  );
};
export default InputValue;

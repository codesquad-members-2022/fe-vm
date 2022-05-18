import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { MessageContext } from "../../context/MessageContext";
import { MoneyContext } from "../../context/MoneyContext";
import "./InputValue.css";

const InputValue = () => {
  const { inputPrice, setInputPrice } = useContext(InputContext);
  const { message, setMessage } = useContext(MessageContext);
  const { accumulatedPrice, setAccumulatedPrice } = useContext(MoneyContext);

  const writePriceHandler = (event) => {
    setInputPrice(Number(event.target.value));
  };

  const insertPriceHandler = (event) => {
    event.preventDefault();
    setMessage((prev) => [inputPrice, ...prev]);
    setAccumulatedPrice(accumulatedPrice + inputPrice);
    setInputPrice("");
  };
  console.log(message);

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

import { getAddedWallet } from "components/VM/Operations/OperationMenu/Return";
import { moneyUnitArr, RETURN_COUNT } from "constants/constants";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { debounce, getNeededMoney } from "utils/util";
import { InputContext } from "./InputStore";
import { MessageContext } from "./MessageStore";
import { WalletContext } from "./WalletStore";

export const TimerContext = createContext();

export default function TimerStore(props) {
  const inputContext = useContext(InputContext);
  const { input, setInput } = inputContext;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const walletContext = useContext(WalletContext);
  const { wallet, setWallet } = walletContext;

  const [timer, setTimer] = useState(false);

  const returnFn = useCallback(
    debounce((currentInput, currentWallet) => {
      if (currentInput === 0) return;
      setWallet(
        getAddedWallet(
          currentWallet,
          getNeededMoney(currentInput, moneyUnitArr)
        )
      );
      setMessage((prev) => [
        ...prev,
        `잔돈 ${currentInput}원이 반환되었습니다 \n`,
      ]);
      setInput(0);
    }, RETURN_COUNT),
    []
  );

  useEffect(() => {
    if (!timer) return;
    returnFn(input, wallet);
    setTimer(false);
  }, [timer]);

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {props.children}
    </TimerContext.Provider>
  );
}

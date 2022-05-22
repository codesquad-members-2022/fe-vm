import { PAGE } from "../../constants";
import { useVendingMachineDispatchContext } from "../../context/VendingMachineContext";
import MoneyUnit from "./MoneyUnitItem.style";

function MoneyUnitItem({ money }) {
    const { putMoneyIntoVendingMachine } = useVendingMachineDispatchContext();

    const clickEventHandler = () => {
        if (!money.count) {
            return;
        }

        putMoneyIntoVendingMachine(money.unit, PAGE.WALLET);
    };

    return (
        <MoneyUnit disabled={!money.count} onClick={clickEventHandler}>
            {money.unit}원
        </MoneyUnit>
    );
}

export default MoneyUnitItem;

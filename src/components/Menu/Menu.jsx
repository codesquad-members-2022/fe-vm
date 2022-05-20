import React, { useState, useContext } from "react";
import { StyledMenu, StyledMenuTitle, StyledMenuPrice } from "./Menu.styled";
import { addComma } from "utils";
import { MenuStockContext, MoneyContext, LogContext } from "../../App.js";
// import { Rings } from "react-loader-spinner";
import { Loading } from "components";

function Menu({ title, price, stock }) {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const { logs, setLogs } = useContext(LogContext);
  const { menuStock, setMenuStock } = useContext(MenuStockContext);

  const [isLoading, setIsLoading] = useState(false);

  const addMenuLog = () => {
    const newLog = { idx: logs.length + 1, type: "select", data: title + "(이)가 선택됨" };
    setLogs([...logs, newLog]);
  };

  const handleMenuStock = () => {
    if (!stock || price > inputMoney) return;

    setIsLoading(true);

    setTimeout(() => {
      setInputMoney(inputMoney - price);
      // TODO: 타이머 적용 후 잔돈 반환

      const editedMenuStock = menuStock.map((menu) => {
        if (menu.title === title) {
          return { ...menu, stock: menu.stock - 1 };
        }
        return menu;
      });
      setMenuStock(editedMenuStock);
      addMenuLog();

      setIsLoading(false);
    }, 2000);
  };

  return (
    <StyledMenu>
      <StyledMenuTitle price={price} inputMoney={inputMoney} stock={+stock} onClick={handleMenuStock}>
        {title}
        {isLoading && <Loading />}
      </StyledMenuTitle>
      <StyledMenuPrice>{stock ? addComma(price) : "품절"}</StyledMenuPrice>
    </StyledMenu>
  );
}

export { Menu };

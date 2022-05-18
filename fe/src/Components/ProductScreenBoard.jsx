import Beverage from "Components/ProductScreenBoard/Beverage";
import { DRINK_API } from "Helper/constant";
import { fetchData } from "Helper/utils";
import { useEffect, useState } from "react";
import { ScreenBoard } from "./ProductScreenBoard.styled";

export default function ProductScreenBoard() {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    const getBeverages = async () => {
      const beverageDatas = await fetchData(DRINK_API);
      setBeverages(beverageDatas);
    };
    getBeverages();
  }, []);

  return (
    <ScreenBoard flex wrap="wrap">
      {beverages.map(({ id, drinkTitle, drinkPrice }) => {
        return <Beverage key={id} id={id} title={drinkTitle} price={drinkPrice} />;
      })}
    </ScreenBoard>
  );
}

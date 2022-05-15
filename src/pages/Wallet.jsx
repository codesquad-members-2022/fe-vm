import React, { useState } from "react";
import myWallet from "mocks/myWallet";
import { convert2MoneyUnit } from "utils";
import MoneyUnitItem from "components/Wallet/MoneyUnitItem";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";

const Wallet = () => {
  const [moneyState, setMoneyState] = useState(myWallet);
  const totalMoney = convert2MoneyUnit(
    moneyState.reduce((prev, { money, count }) => prev + money * count, 0),
    "kr"
  );

  return (
    <motion.div
      className="flex flex-col items-center max-w-xs gap-3 p-4 mx-auto text-2xl border-4 shadow-md rounded-3xl shadow-starbucks border-starbucks"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants(100)}
      transition={pageTransition}
    >
      {moneyState.map((moneyUnitInfo) => (
        <MoneyUnitItem key={moneyUnitInfo.id} {...moneyUnitInfo} />
      ))}
      <span className="mt-5 w-[95%] text-center py-3 text-3xl border-4 border-starbucks rounded-md">
        {totalMoney}원
      </span>
    </motion.div>
  );
};

export default Wallet;

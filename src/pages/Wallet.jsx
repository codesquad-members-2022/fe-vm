import React, { useContext, useEffect, useMemo, useState } from "react";
import MoneyUnitItem from "components/Wallet/MoneyUnitItem";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";
import { WalletDispatchContext, WalletStateContext } from "contexts/WalletProvider";
import { calcTotalMoney } from "helpers/calculateMoney";

const Wallet = () => {
  const wallet = useContext(WalletStateContext);
  const totalMoney = calcTotalMoney(wallet);

  return (
    <motion.div
      className="flex flex-col gap-3 items-center p-4 mx-auto max-w-xs text-2xl rounded-3xl border-4 border-starbucks shadow-lg shadow-gray"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants(100)}
      transition={pageTransition}
    >
      {wallet.map((moneyUnitInfo) => (
        <MoneyUnitItem key={moneyUnitInfo.id} {...moneyUnitInfo} />
      ))}
      <TotalMoney totalMoney={totalMoney} />
    </motion.div>
  );
};

const TotalMoney = ({ totalMoney }) => {
  return (
    <span className="py-3 mt-5 w-[95%] text-3xl text-center rounded-md border-4 border-starbucks">
      {totalMoney}원
    </span>
  );
};

export default Wallet;

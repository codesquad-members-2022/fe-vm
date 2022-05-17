import React, { useContext, useMemo, useState } from "react";
import MoneyUnitItem from "components/Wallet/MoneyUnitItem";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";
import { WalletDispatchContext, WalletStateContext } from "contexts/WalletProvider";

const Wallet = () => {
  const { wallet } = useContext(WalletStateContext);

  return (
    <motion.div
      className="flex flex-col items-center max-w-xs gap-3 p-4 mx-auto text-2xl border-4 shadow-md rounded-3xl shadow-starbucks border-starbucks"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants(100)}
      transition={pageTransition}
    >
      {wallet.map((moneyUnitInfo) => (
        <MoneyUnitItem key={moneyUnitInfo.id} {...moneyUnitInfo} />
      ))}
      <TotalMoney />
    </motion.div>
  );
};

const TotalMoney = () => {
  const { coinSum } = useContext(WalletStateContext);

  return (
    <span className="mt-5 w-[95%] text-center py-3 text-3xl border-4 border-starbucks rounded-md">
      {coinSum}원
    </span>
  );
};

export default React.memo(Wallet);

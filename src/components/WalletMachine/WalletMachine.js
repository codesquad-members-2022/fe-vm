import "./walletmachine.css";
import { walletData } from "../../datas/WalletData";
import WalletPrice from "./WalletPrice";
import WalletAmount from "./WalletAmount";
const WalletMachine = () => {
  return (
    <div>
      {walletData.map((v) => (
        <div className="walletmachine-wrapper">
          <WalletPrice price={v.price} />
          <WalletAmount amount={v.amount} />
        </div>
      ))}
    </div>
  );
};

export default WalletMachine;

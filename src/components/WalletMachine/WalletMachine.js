import "./walletmachine.css";
import { walletData } from "../../datas/WalletData";
import WalletInfo from "./WalletInfo";

const WalletMachine = () => {
  return (
    <div>
      {walletData.map((v) => (
        <div key={v.id} className="walletmachine-wrapper">
          <WalletInfo price={v.price} amount={v.amount} />
        </div>
      ))}
    </div>
  );
};

export default WalletMachine;

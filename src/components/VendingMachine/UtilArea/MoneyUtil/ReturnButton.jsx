import { useContext } from "react";
import { css } from "styled-components";
import { Balance } from "contextProviders/BalanceProvider";
import Button from "components/common/Button";

const ReturnButton = () => {
  const { putMoneyBackInWallet } = useContext(Balance);

  return <Button styles={returnButtonStyles} content={"return"} onClick={putMoneyBackInWallet} />;
};

const returnButtonStyles = css`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ReturnButton;

import styled from "styled-components";

const StyledWallet = styled.div`
  width: 200px;
  margin: 0 auto;
  border: 2px solid black;
  margin-top: 20px;
`;

const WalletDetail = styled.div`
  display: flex;
  width: 200px;
  height: 600px;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 20px;
`;

const TotalAmout = styled.div`
  width: 160px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  line-height: 40px;
  border: 1px solid green;
  margin-bottom: 20px;
`;

const CoinPrice = styled.div`
  width: 40%;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;

  &:hover {
    background-color: #ff8e14;
    cursor: pointer;
  }
`;

const CoinCount = styled.div`
  width: 40%;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
`;

export { StyledWallet, WalletDetail, TotalAmout, CoinPrice, CoinCount };

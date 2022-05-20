import styled from "styled-components";

const WalletBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: auto;
    margin-top: 15px;
    border: 1px solid;
    font-size: 12px;
`;

const CoinPair = styled.div`
    display: flex;
    flex-direction: row;
`;

const CoinInWallet = styled.div`
    width: 60px;
    height: 30px;
    margin: 10px;
    border: 1px solid;
    border-radius: 10px;
    text-align: center;
`;

function Wallet() {
    console.log("wallet");

    return (
        <WalletBox>
            <CoinPair>
                <CoinInWallet>10원</CoinInWallet>
                <CoinInWallet>0개</CoinInWallet>
            </CoinPair>
            <CoinPair>
                <CoinInWallet>10원</CoinInWallet>
                <CoinInWallet>0개</CoinInWallet>
            </CoinPair>
            <CoinPair>
                <CoinInWallet>10원</CoinInWallet>
                <CoinInWallet>0개</CoinInWallet>
            </CoinPair>
            <CoinPair>
                <CoinInWallet>10원</CoinInWallet>
                <CoinInWallet>0개</CoinInWallet>
            </CoinPair>
            <CoinPair>
                <CoinInWallet>10원</CoinInWallet>
                <CoinInWallet>0개</CoinInWallet>
            </CoinPair>
            <CoinPair>
                <CoinInWallet>1000원</CoinInWallet>
            </CoinPair>
        </WalletBox>
    );
}

export { Wallet };

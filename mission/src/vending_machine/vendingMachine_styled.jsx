import styled from "styled-components";

const VendingMachineDrink = styled.div`
    background-color: aquamarine;
    width: 40px;
    height: 100px;
    margin: 5px;
    cursor: pointer;
    font-size: 10px;
`;
const VendingMachineDiv = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 10px;
`;
const VendingMachineMenu = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
`;
const VendingMachineInputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-top: 5px;
    margin-left: 20px;
`;
const VendingMachineInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
`;
const VendingMachineInsertCoin = styled.input`
    margin-bottom: 10px;
    padding: 2px;
    font-size: 12px;
`;
const VendingMachineInputTitle = styled.p`
    align-self: center;
    font-size: 12px;
`;

const VendingMachineInsertTotal = styled.p`
    font-size: 12px;
`;
const VendingMachineInputReturnBtn = styled.button`
    background-color: lightgray;
    width: 100%;
    height: 25px;
    border: none;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 12px;
`;
const VendingMachineInputLog = styled.div`
    height: auto;
    font-size: 12px;
`;

export {
    VendingMachineDiv,
    VendingMachineMenu,
    VendingMachineDrink,
    VendingMachineInsertCoin,
    VendingMachineInputBox,
    VendingMachineInputTitle,
    VendingMachineInsertTotal,
    VendingMachineInputReturnBtn,
    VendingMachineInputLog,
};

/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import styled from "styled-components";
import returnIcon from "asset/return.png";
import insertIcon from "asset/insert.png";
import logo from "asset/codesquad.png";
import VendingMachineDisplay from "component/VendingMachineDisplay";
import * as uiConst from "constant/uiConstant";

function OrderBox() {
    function handleReturnBtn() {
        console.log("return");
    }
    function handleInsertBtn() {
        console.log("insert");
    }

    return (
        <OrderContainer>
            <VendingMachineLogo />
            <VendingMachineDisplay />
            <VendingMachineBtnBox>
                <ReturnBtn onClick={handleReturnBtn} />
                <InsertBtn onClick={handleInsertBtn} />
            </VendingMachineBtnBox>
        </OrderContainer>
    );
}

const OrderContainer = styled.div`
    margin: ${({ theme }) => theme.margins.lg};
`;

const VendingMachineLogo = styled.div`
    height: ${uiConst.VENDING_MACHINE_LOGO};
    background: url(${logo}) no-repeat;
    background-size: contain;
`;

const VendingMachineBtnBox = styled.div`
    display: flex;
`;

const ReturnBtn = styled.button`
    width: ${uiConst.RETURN_BTN_WIDTH};
    height: ${uiConst.RETURN_BTN_HEIGHT};
    margin: ${({ theme }) => theme.margins.xl};
    background: url(${returnIcon});
    background-size: contain;
    border: none;
    cursor: pointer;
`;

const InsertBtn = styled.button`
    width: ${uiConst.INSERT_BTN_WIDTH};
    height: ${uiConst.INSERT_BTN_HEIGHT};
    margin: ${({ theme }) => theme.margins.xl};
    background: url(${insertIcon});
    background-size: contain;
    border: none;
    cursor: pointer;
`;

export default OrderBox;

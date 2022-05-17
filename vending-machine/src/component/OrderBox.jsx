import styled from "styled-components";
import returnIcon from "../asset/return.png";
import insertIcon from "../asset/insert.png";
import logo from "../asset/codesquad.png";
import VendingMachineDisplay from "./VendingMachineDisplay";

import { useState } from "react";
import ModalPortal from "../Portal";
import Modal from "../page/InsertModal";

function OrderBox() {
    const [modalOn, setModalOn] = useState(false);

    function handleModal() {
        setModalOn(!modalOn);
    }

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
                <InsertBtn onClick={handleModal} />
                <ModalPortal>{modalOn && <Modal onClose={handleModal} />}</ModalPortal>
            </VendingMachineBtnBox>
        </OrderContainer>
    );
}

const OrderContainer = styled.div`
    margin: 20px;
`;

const ReturnBtn = styled.div`
    width: 120px;
    height: 120px;
    background: url(${returnIcon}) no-repeat;
    background-size: contain;
    margin: 40px;
    cursor: pointer;
`;

const InsertBtn = styled.div`
    width: 120px;
    height: 120px;
    background: url(${insertIcon}) no-repeat;
    background-size: contain;
    margin: 40px;
    cursor: pointer;
`;

const VendingMachineBtnBox = styled.div`
    display: flex;
`;

const VendingMachineLogo = styled.div`
    height: 300px;
    background: url(${logo}) no-repeat;
    background-size: contain;
`;

export default OrderBox;

/* eslint-disable react/prop-types */
import * as uiConst from "constant/uiConstant";
import styled from "styled-components";

function VendingMachineDisplay({ totalAmout }) {
    return (
        <DisplayTextBox>
            <DisplayText>{`₩ ${totalAmout.toLocaleString("ko-KR")}` || "판매중.."}</DisplayText>
        </DisplayTextBox>
    );
}

const DisplayTextBox = styled.div`
    margin-bottom: ${({ theme }) => theme.margins.small};
    padding: ${({ theme }) => theme.paddings.medium};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadiuses.medium};
    width: ${uiConst.VENDING_MACHINE_DISPLAY_WIDTH};
`;

const DisplayText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.lightGreen};
`;

export default VendingMachineDisplay;

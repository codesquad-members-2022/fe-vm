import * as uiConst from "constant/uiConstant";
import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const VendingMachineBox = styled.div`
    width: ${uiConst.VENDING_MACHINE_WIDTH};
    margin: 0 auto;
    display: flex;
`;

export const VendingMachineLeftCol = styled.div`
    border: 5px solid #000;
    border-right: none;
    min-height: ${uiConst.VENDING_MACHINE_HEIHGT};
    width: ${uiConst.PRODUCT_WINDOW_WIDTH};
`;

export const VendingMachineRightCol = styled.div`
    border: 5px solid #000;
    height: ${uiConst.VENDING_MACHINE_HEIHGT}px;
    width: ${uiConst.VENDING_MACHINE_WIDTH - uiConst.PRODUCT_WINDOW_WIDTH};
`;

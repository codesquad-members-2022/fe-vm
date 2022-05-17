import styled from "styled-components";

function VendingMachineDisplay() {
    return <DisplayText>판매중...</DisplayText>;
}

const DisplayText = styled.div`
    margin-bottom: ${({ theme }) => theme.margins.medium};
    padding: ${({ theme }) => theme.paddings.medium};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.lightGreen};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadiuses.medium}; ;
`;

export default VendingMachineDisplay;

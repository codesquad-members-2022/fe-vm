import styled from "styled-components";

function VendingMachineDisplay() {
    return (
        <DisplayTextBox>
            <DisplayText>판매중...</DisplayText>
        </DisplayTextBox>
    );
}

const DisplayTextBox = styled.div`
    margin-bottom: ${({ theme }) => theme.margins.medium};
    padding: ${({ theme }) => theme.paddings.medium};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borderRadiuses.medium}; ;
`;

const DisplayText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.lightGreen};
`;

export default VendingMachineDisplay;

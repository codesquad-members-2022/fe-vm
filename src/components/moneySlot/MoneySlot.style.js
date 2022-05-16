import styled from "styled-components";

const SlotContainer = styled.form`
    width: 300px;
    height: 45px;
    border: 1px solid black;
    border-radius: 5px;
    ${({ theme }) => theme.flexLayoutMixin("row", "end", "center")};
    padding: 0px 8px;
`;

const Slot = styled.input`
    margin-left: auto;
    width: 100%;
    text-align: right;
    font-size: 1.8rem;
`;

export { SlotContainer, Slot };

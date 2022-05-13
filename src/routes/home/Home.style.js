import styled from "styled-components";

const HomeContainer = styled.main`
    width: 100vw;
    height: 100vh;
    ${({ theme }) => theme.flexLayoutMixin("column", "center", "center")};
    gap: 30px;
`;

const TabNav = styled.nav`
    ${({ theme }) => theme.flexLayoutMixin()};
    gap: 20px;
`;

const TabButton = styled.button`
    width: 100px;
    height: 45px;
    border: 1.5px solid black;
    border-radius: 10px;
    background-color: ${({ isCurrentTab }) =>
        isCurrentTab ? "black" : "white"};
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 1.6rem;
        line-height: 42px;
        font-weight: ${({ isCurrentTab }) => (isCurrentTab ? "600" : "500")};
        color: ${({ isCurrentTab }) => (isCurrentTab ? "white" : "black")};
    }
`;

export { HomeContainer, TabNav, TabButton };

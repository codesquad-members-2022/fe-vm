import styled from "styled-components";

const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
const AppHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;
const AppHeaderNav = styled.nav`
    border-bottom: solid 1px;
    padding-bottom: 1rem;
    width: 620px;
`;
const AppHeaderTitle = styled.h2`
    font-size: 30 px;
`;
const LinkStyle = {
    fontSize: "15px",
    cursor: "pointer",
};

export { AppDiv, AppHeader, AppHeaderNav, AppHeaderTitle, LinkStyle };

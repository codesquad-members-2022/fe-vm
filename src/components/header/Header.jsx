import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const Header = () => {
  return (
    <nav>
      <HeaderWrapper>
        <Link to="/vm" style={{ textDecoration: "none" }}>
          <Button type={"자판기"} />
        </Link>

        <Link to="/wallet" style={{ textDecoration: "none" }}>
          <Button type={"지갑"} />
        </Link>
      </HeaderWrapper>
    </nav>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 3.5vh;
  margin-top: 3.5vh;
`;

export default Header;

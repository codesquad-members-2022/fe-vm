import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { alertMessage } from "convention";

const Nav = () => {
  const navigate = useNavigate();

  const handleClickStockManager = () => {
    if (window.confirm(alertMessage.moveToStockManager)) {
      navigate("/stock-manager");
    }
  };

  return (
    <>
      <Link to="/vending-machine">
        <Menu>Vending machine</Menu>
      </Link>
      <Menu onClick={handleClickStockManager}>Stock Manager</Menu>
    </>
  );
};

const Menu = styled.span`
  margin-right: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

export default Nav;

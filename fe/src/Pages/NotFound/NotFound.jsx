import { NavLink } from "react-router-dom";
import { NotFoundContainer } from "./NotFound.styled";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404 Not Found</h1>
      <div>올바른 경로를 입력하세요.</div>
      <div>
        자판기 : <NavLink to="/">https://hoi-vending-machine.herokuapp.com/</NavLink>
      </div>
      <div>
        지갑 : <NavLink to="/wallet">https://hoi-vending-machine.herokuapp.com/wallet</NavLink>
      </div>
    </NotFoundContainer>
  );
}

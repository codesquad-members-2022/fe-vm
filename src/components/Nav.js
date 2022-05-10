import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">자판기</Link>
      <Link to="/wallet">지갑</Link>
    </nav>
  );
}

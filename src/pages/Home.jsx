import { Link, Outlet } from "react-router-dom";

function Title() {
  return <h1>Vending Machine</h1>;
}

function Nav() {
  return (
    <nav>
      <Link to="/vendingmachine">자판기</Link>
      <Link to="/wallet">지갑</Link>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Title />
      <Nav />
      <Outlet />
    </div>
  );
}

export { Home };

import { Outlet, Link, useLocation } from "react-router-dom";

function Home() {
    const { pathname } = useLocation();

    return (
        <>
            <nav>
                <Link to="/vm">자판기</Link>
                <Link to="/wallet">지갑</Link>
            </nav>
            {pathname === "/" && <h1>버튼을 클릭하세요</h1>}
            <Outlet />
        </>
    );
}

export default Home;

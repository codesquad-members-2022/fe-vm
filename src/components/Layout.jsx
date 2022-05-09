import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <h1>코쿼 자판기</h1>
      <nav>
        <ul>
          <li>
            <Link to='/vendingMachine'>자판기</Link>
          </li>
          <li>
            <Link to='/wallet'>지갑</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className='content'>
      <Outlet />
    </div>
  </>
);

export default Layout;

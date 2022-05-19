import VendingMachineController from 'components/organisms/VendingMachineController';
import { RouteURL } from 'constants/RouteUrl';
import * as Styled from 'pages/Main/Main.style';
import { Outlet, useLocation } from 'react-router-dom';

const [vmPage, walletPage] = RouteURL;

const Main = () => {
  const currentPath = useLocation().pathname;

  return (
    <Styled.Main>
      <Styled.ContentsWrapper>
        {currentPath === vmPage.path && <Outlet />}
        <VendingMachineController currentPathName={currentPath} />
        {currentPath === walletPage.path && <Outlet />}
      </Styled.ContentsWrapper>
    </Styled.Main>
  );
};

export default Main;

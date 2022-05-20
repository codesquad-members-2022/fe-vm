import { OrderInProgressContext } from "Context/OrderInProgressProvider";
import { NAV_MENUS } from "Helper/constant";
import useSetAlertMessage from "Hooks/useSetAlertMessage";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { InformationMessage, LayoutContainer, NavContainer, NavLi, NavUl } from "./Layout.styled";

export default function Layout() {
  const orderInProgress = useContext(OrderInProgressContext);
  const applyAlertMessage = useSetAlertMessage();

  const handleClick = (event) => {
    if (!orderInProgress) {
      return;
    }

    applyAlertMessage("buying");

    event.preventDefault();
  };

  const navigations = NAV_MENUS.map(({ id, name, path }) => {
    return (
      <NavLi key={id} flex justify="center" align="center">
        <NavLink to={path} onClick={handleClick}>
          <div>{name}</div>
        </NavLink>
      </NavLi>
    );
  });

  return (
    <LayoutContainer>
      <NavContainer>
        <NavUl flex>{navigations}</NavUl>
      </NavContainer>
      <InformationMessage left="40px" top="0px">
        키보드 q 입력시 재고 충전
      </InformationMessage>
      <InformationMessage left="40px" top="30px">
        키보드 w 입력시 현금 충전
      </InformationMessage>
      <InformationMessage left="40px" top="60px">
        키보드 e 입력시 초기화
      </InformationMessage>
      <Outlet />
    </LayoutContainer>
  );
}

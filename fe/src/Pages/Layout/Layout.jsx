import { OrderInProgressContext } from "Context/OrderInProgressProvider";
import { NAV_MENUS } from "Helper/constant";
import useSetAlertMessage from "Hooks/useSetAlertMessage";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

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

      <Outlet />
    </LayoutContainer>
  );
}

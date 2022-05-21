import { ToggleWrapper } from "./AppLayout.styled";

function AppLayout({ display, children }) {
  return <ToggleWrapper display={display}>{children}</ToggleWrapper>;
}

export { AppLayout };

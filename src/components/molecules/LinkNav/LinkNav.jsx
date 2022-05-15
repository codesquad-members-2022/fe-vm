import PageLink from 'components/atoms/PageLink/PageLink';
import StyledNav from './LinkNav.style';

function LinkNav() {
  return (
    <StyledNav>
      <PageLink pageName="vendingMachine" />
      <PageLink pageName="wallet" />
    </StyledNav>
  );
}

export default LinkNav;

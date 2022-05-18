import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledNavButton } from './NavButton.style';
import Button from 'components/atoms/Button/Button';
import { RouteURL } from 'constants/RouteUrl';

const NavButton = ({ unit, count, ...props }) => {
  const currentUrl = useLocation();

  const getButtonStyle = path => ({
    sizeType: 'medium',
    fontType: 'medium',
    colorType: currentUrl.pathname === path ? 'point' : 'disabled',
  });

  return (
    <StyledNavButton borderType="rounded" flexType="center">
      {RouteURL.map((URL, key) => (
        <NavLink key={URL.id} to={URL.path}>
          <Button {...getButtonStyle(URL.path)}>{URL.name}</Button>
        </NavLink>
      ))}
    </StyledNavButton>
  );
};

NavButton.defaultProps = {
  borderType: 'rounded',
};

NavButton.propTypes = {
  borderType: PropTypes.string,
};

export default NavButton;

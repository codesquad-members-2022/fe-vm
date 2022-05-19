import PropTypes from 'prop-types';
import { RouteURL } from 'constants/RouteUrl';
import { NavLink, useLocation } from 'react-router-dom';
import Button from 'components/atoms/Button';
import * as Styled from 'components/molecules/NavButton/NavButton.style';

const NavButton = ({ unit, count, ...props }) => {
  const currentPath = useLocation().pathname;

  const getButtonStyle = path => ({
    sizeType: 'medium',
    fontType: 'medium',
    colorType: currentPath === path ? 'point' : 'disabled',
  });

  return (
    <Styled.NavButton borderType="rounded" flexType="center">
      {RouteURL.map((URL, key) => (
        <NavLink key={URL.id} to={URL.path}>
          <Button {...getButtonStyle(URL.path)}>{URL.name}</Button>
        </NavLink>
      ))}
    </Styled.NavButton>
  );
};

NavButton.defaultProps = {
  borderType: 'rounded',
};

NavButton.propTypes = {
  borderType: PropTypes.string,
};

export default NavButton;

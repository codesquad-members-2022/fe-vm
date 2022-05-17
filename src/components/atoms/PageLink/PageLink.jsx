import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function PageLink({ pageName }) {
  return (
    <NavLink
      to={pageName}
      style={({ isActive }) => ({
        color: isActive ? 'white' : 'black',
        background: isActive ? 'black' : 'white',
      })}
    >
      {pageName}
    </NavLink>
  );
}

PageLink.propTypes = {
  pageName: PropTypes.string,
};

export default PageLink;

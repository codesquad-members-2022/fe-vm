import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledDiv from './PageLink.style';

function PageLink({ pageName }) {
  return (
    <StyledDiv>
      <NavLink to={pageName}>{pageName}</NavLink>
    </StyledDiv>
  );
}

PageLink.propTypes = {
  pageName: PropTypes.string,
};

export default PageLink;

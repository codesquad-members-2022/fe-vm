import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FlexBox = styled.div`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  ${({ flexFlow }) =>
    !flexFlow &&
    css`
      flex-direction: ${({ flexDirection }) => flexDirection};
      flex-wrap: ${({ flexWrap }) => flexWrap};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css`
      flex-flow: ${flexFlow};
    `}
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
`;

FlexBox.propTypes = {
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  display: PropTypes.oneOf(['inline-flex', 'flex']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexFlow: PropTypes.string,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};

FlexBox.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexFlow: null,
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: 'auto',
};

FlexBox.displayName = 'FlexBox';

export default FlexBox;

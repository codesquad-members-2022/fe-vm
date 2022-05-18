import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ActionLogs({ actionLogs }) {
  return (
    <ul>
      {actionLogs.map(({ id, msg }) => (
        <li key={id}>{msg}</li>
      ))}
    </ul>
  );
}

ActionLogs.propTypes = {
  actionLogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      msg: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(ActionLogs);

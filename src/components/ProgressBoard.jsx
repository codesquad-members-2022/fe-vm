/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBoard({ progressMsg }) {
  return (
    <ul>
      {progressMsg.map((msg, index) => (
        <li key={`msg-${msg + index}`}>{msg}</li>
      ))}
    </ul>
  );
}

ProgressBoard.propTypes = {
  progressMsg: PropTypes.array.isRequired,
};

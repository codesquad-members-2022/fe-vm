/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBoard({ progressMsg }) {
  return (
    <ul>
      {progressMsg.map((msg) => (
        <li key={`msg-${msg}`}>{msg}</li>
      ))}
    </ul>
  );
}

ProgressBoard.propTypes = {
  progressMsg: PropTypes.array.isRequired,
};

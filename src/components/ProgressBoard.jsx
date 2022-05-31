/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function ProgressBoard({ progressMsg }) {
  return (
    <ul>
      {progressMsg.map((msg) => (
        <li key={uuid()}>{msg}</li>
      ))}
    </ul>
  );
}

ProgressBoard.propTypes = {
  progressMsg: PropTypes.array.isRequired,
};

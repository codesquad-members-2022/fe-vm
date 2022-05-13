import React from 'react';
import PropTypes from 'prop-types';
import { HistoryList, HistoryItem } from 'components/orderArea/History.style';

export default function History({ historyList }) {
  return (
    <HistoryList>
      {historyList.map((item, idx) => (
        <HistoryItem key={`history_${idx}`}>{item}</HistoryItem>
      ))}
    </HistoryList>
  );
}

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string)
};

History.defaultProps = {
  historyList: []
};

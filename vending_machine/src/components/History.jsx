import React from 'react';

const History = ({ progressBox }) => {
  return (
    <>
      {progressBox.map((data, idx) => (
        <li key={idx}>{data}</li>
      ))}
    </>
  );
};

export default History;

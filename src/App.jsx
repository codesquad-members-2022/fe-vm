import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Button = styled.button`
  background-color: #fe3;
`;

const App = () => {
  const [count, setCount] = useState(20000);
  return (
    <>
      <div>{count}</div>
      <Button
        onClick={() => {
          setCount((preS) => preS + 1);
        }}
      >
        버튼
      </Button>
    </>
  );
};

export default App;

import React from 'react';
import './Header.css';

const Haeder = (props) => {
  return (
    <>
      <header className="header">
        <h1 className="title">VENDING MACHINE</h1>
        <span className="timer">1</span>
      </header>
      <div className="Btn-container">
        <button>stock</button>
        <button>vending</button>
        <button>balance</button>
      </div>
    </>
  );
};

export default Haeder;

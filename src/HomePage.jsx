import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <button type="button">자판기</button>
      <button type="button">지갑</button>
      <ul>
        <li>
          <Link to="/vm">자판기</Link>
        </li>
        <li>
          <Link to="/wallet">지갑</Link>
        </li>
      </ul>
    </>
  );
}

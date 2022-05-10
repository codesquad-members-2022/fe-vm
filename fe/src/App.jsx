import React from 'react';
import drinks from 'mock/drinks';
import snacks from 'mock/snacks';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {drinks.map(drink => (
          <li key={drink.id}>{drink.pruduct_name}</li>
        ))}
      </ul>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>{snack.pruduct_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

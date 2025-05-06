import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Counter App</h1>
      <h2 style={{ fontSize: '24px' }}>Count: {count}</h2>
      <div>
        <button
          name='Increment'
          onClick={handleIncrement}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            marginRight: '10px',
            border: '1px solid #888',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>
        <button
          name='Decrement'
          onClick={handleDecrement}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            border: '1px solid #888',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

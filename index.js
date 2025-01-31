import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello, World!');
  const changeMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me!</button>
    </div>
  );
}

export default App;
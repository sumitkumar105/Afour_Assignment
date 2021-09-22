import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState<number>(0);
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>clicked me</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState<number>(0);
  return (
    <div className="App">

      <h1>counter: {counter}</h1>
      <h2>man is made by his belife if he has belife so he is</h2>
      <button onClick={()=>setCounter(counter+1)}>clicked me</button>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld someText={"Hello World"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </HelloWorld> 
    </div>
  );
}

export default App;

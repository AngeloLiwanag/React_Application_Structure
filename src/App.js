import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

const Button = ({click, text}) => {
  return(
    <button onClick={click}>{text}</button>
  );
}

function App() {
  const clickHandler = () => console.log("Clicked dynamic button");
  const buttonOneText = "I am the first button being clicked";
  const buttontwoText = "I am the second button being clicked";

  return (
    <div className="App">
      {/* props */}
      <HelloWorld someText={"Hello World"}>

        {/* children */}
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        {/* synthetic events */}
        <button onClick={() => console.log("Believe it or not.. I clicked this..")}>Click Me!</button>
        <Button text={buttonOneText} click={clickHandler}/>
        <Button text={buttontwoText} click={clickHandler}/>
      </HelloWorld> 
    </div>
  );
}

export default App;

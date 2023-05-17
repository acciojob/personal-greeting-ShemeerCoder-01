
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [text,setText] = useState('');
  function myFunc(e){
    setText(e.target.value);
  }
  return (
    <div>
       <p>Enter your name:</p>
       <input onChange={myFunc} type="text"/>
       {text?<p>Hello {text}!</p>:null}
    </div>
  )
}

export default App

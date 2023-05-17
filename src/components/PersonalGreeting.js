import React, { useState } from "react";

function PersonalGreeting() {

  let [name,setName] = useState("");

  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      {name ? <p>Hello {name}!</p> : null}
    </div>
  );
}

export default PersonalGreeting;
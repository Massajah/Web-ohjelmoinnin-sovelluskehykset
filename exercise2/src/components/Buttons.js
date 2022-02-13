import React from "react";

export default function Buttons(props) {
   
  return <div>
    <button onClick={ () => props.button(1)}>Add milk</button>
    <button onClick={ () => props.button(2)}>Add bananas</button>
    <button onClick={ () => props.button(3)}>Add bread</button>
    <button onClick={ () => props.button(4)}>Add eggs</button>
  </div>;
}
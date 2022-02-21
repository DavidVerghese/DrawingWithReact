import { useState } from "react";

function Test() {

  window.addEventListener("touchstart", (e) => { setX(100); setY(100) }, false);
  
  window.addEventListener("mousemove", (e) => { setX(e.clientX);setY(e.clientY) }, false);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return <div>X: {x}, Y: {y}</div>
} 
export default Test;
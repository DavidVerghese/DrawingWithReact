import './Cursor.css';
import { useEffect } from "react";

function Cursor() {

  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");

  window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}
  })
  


  return <div className="cursor"> <i class="fa fa-paint-brush" style={{ fontSize: "38px", color: "red" }}></i></div>
}
export default Cursor;
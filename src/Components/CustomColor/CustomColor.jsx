import './CustomColor.css';
import { useEffect, useState } from "react";

function CustomColor() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => { 

    // From here: https://www.w3schools.com/howto/howto_css_modals.asp
    const modal = document.getElementById("custom-color-modal");
    const btn = document.querySelector("#custom-color-button");
    const close = document.querySelector("#custom-color-modal #close")
    
    btn.onclick = function () {
   
      modal.style.display = "flex";
      setModalIsOpen(true);
    };
    close.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (modalIsOpen && event.target !== modal  && event.target !== btn ) {
        modal.style.display = "none";
        setModalIsOpen(false);
      }
    }

  })
  return (<div id="custom-color-modal" className="modal">
    <h2>Custom Color</h2>
   
    <label htmlFor="red">Red:</label>
    <input type="range" id="red" name="red" min="0" max="255"></input>
    <label htmlFor="green">Green:</label>
    <input type="range" id="green" name="green" min="0" max="255"></input>
    <label htmlFor="blue">Blue:</label>
    <input type="range" id="blue" name="blue" min="0" max="255"></input>
    <label htmlFor="transparency">Transparency:</label>
    <input type="range" id="transparency" name="transparency" min="0" max="255"></input>
  <button id="close">Close</button>
</div>)
}
export default CustomColor;
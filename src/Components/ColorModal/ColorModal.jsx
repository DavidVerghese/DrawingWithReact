import { useEffect, useState } from "react";
import './ColorModal.css';

function ColorModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => { 

    // From here: https://www.w3schools.com/howto/howto_css_modals.asp

    const modal = document.getElementById("color-modal");
  
    const btn = document.querySelector(".pick-color-outside");
    const innerCircle = document.querySelector(".pick-color-outside .pick-color");
    const close = document.querySelector("#color-modal #close")
    const customColor = document.querySelector("#custom-color-button")
    btn.onclick = function () {
   
      modal.style.display = "flex";
      setModalIsOpen(true);
    };
    close.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (modalIsOpen &&  event.target !== modal && event.target !== btn && event.target !== innerCircle) {
        modal.style.display = "none";
        setModalIsOpen(false);
      }
      // if (event.target === customColor) {
      //   modal.style.display = "none";
      //   setModalIsOpen(false);
      // }
    }

  })

  return <div id="color-modal" className="modal">
    <h2>Color</h2>
    <div>  <p>Custom:</p><button id="custom-color-button">+</button></div>
    <hr/>
    <div className="color-row">
       <div id="red-color-icon" className="color-icon" ></div>
      <div id="orange-color-icon" className="color-icon" ></div>
     <div id="yellow-color-icon" className="color-icon" ></div>
     <div id="green-color-icon" className="color-icon" ></div>
     <div id="blue-color-icon" className="color-icon" ></div>
     <div id="indigo-color-icon" className="color-icon" ></div>
      <div id="violet-color-icon" className="color-icon" ></div>
      <div id="gray-color-icon" className="color-icon" ></div>
      <div id="black-color-icon" className="color-icon" ></div>
      <div id="white-color-icon" className="color-icon" ></div>
    </div>
 
  
    <button id="close">Close</button>
  </div>
}
export default ColorModal;
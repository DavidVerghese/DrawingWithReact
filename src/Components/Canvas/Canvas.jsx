import { useEffect, useState } from "react";
import './Canvas.css';
function Canvas() {

  
  useEffect(() => { 

    let width = "2";
    let color = 'gray';
    let title = 'untitled';
    let fileType = 'png';

    const canvas = document.getElementById("canvas");
    let mouseCursor = document.querySelector(".cursor");

    canvas.width = window.innerWidth - 100;
    canvas.height = 400;

    let context = canvas.getContext("2d");
//     let start_background_color = "white"; 
// context.fillStyle = start_background_color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    const background = new Image();
    background.src = require("../../Pictures/Canvas.jpeg");
    background.setAttribute('crossOrigin', '');

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    context.drawImage(background,0,0);   
}

let draw_color = color;
let draw_width = width;
    let is_drawing = false;
    let restore_array = [];
let index = -1;


canvas.addEventListener("touchstart", start, false);
    canvas.addEventListener("touchmove", draw, false);
    canvas.addEventListener("mouseenter", () => mouseCursor.style.display = "flex",false)
canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);
    canvas.addEventListener("touchend", stopDrawing, false);
canvas.addEventListener("mouseup", stopDrawing, false);
    canvas.addEventListener("mouseout", stopDrawing, false);
    canvas.addEventListener("mouseout", () => mouseCursor.style.display = "none",false)

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  event.preventDefault(); 
}

  
    function draw(event) {
      draw_color = color;
      draw_width = width;
  if (is_drawing) {
    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
    };

    function stopDrawing(event) {
      
    if (is_drawing) {
      context.stroke();
      context.closePath();
      is_drawing = false;
    }
    event.preventDefault();
    if (event.type === "mouseup") {
      restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
      index += 1;
    }

  }

function clear_canvas() {
  // context.fillStyle = start_background_color;
  const background = new Image();
  background.src = "https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  background.setAttribute('crossOrigin', '');
  background.onload = function(){
    context.drawImage(background,0,0);   
}
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  restore_array = [];
  index = -1;
}
    
    function undo_last() {
      console.log(index);
  if (index <= 0) {
    clear_canvas();
  } else {
    index -= 1;
    restore_array.pop();
    context.putImageData(restore_array[index],0,0)
  }
}

    document.querySelector('#clear').addEventListener("click",clear_canvas)
    document.querySelector('#undo').addEventListener("click", undo_last);
  

    if (document.querySelector('#download-modal')) {
      document.querySelector('#download-title').addEventListener("input", (e) => title = e.target.value);
      console.log(title);
      document.querySelector('#file-type').addEventListener('change', (e) => { fileType = e.target.value; console.log(e.target.value)})
      document.querySelector('#start-download').addEventListener("click", download);
    }
    
    document.querySelector('#red-color-field').addEventListener("click", () => { color = 'red'; mouseCursor.style.color = color})
    document.querySelector('#blue-color-field').addEventListener("click", () => { color = 'blue'; mouseCursor.style.color = color})
    document.querySelector('#green-color-field').addEventListener("click", () => { color = 'green'; mouseCursor.style.color = color})
    document.querySelector('#yellow-color-field').addEventListener("click", () => { color = 'yellow'; mouseCursor.style.color = color})

    document.querySelector('#color-picker').addEventListener("input", (e) => { color = e.target.value; mouseCursor.style.color = color })
    document.querySelector('#pen-range').addEventListener("input", (e) => width = e.target.value)
    


    window.addEventListener('mousemove', cursor);
  
  function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
  }
    
    mouseCursor.style.color = color;
    
    function download() {
      
var link = document.createElement('a');
link.download = title;
link.href = canvas.toDataURL(`image/${fileType}`)
link.click();
      
    }
    
  })

  return <div>
   
    
    <div className="cursor"> <i className="fa fa-paint-brush"></i></div><canvas id="canvas"></canvas> </div> 
}
export default Canvas;
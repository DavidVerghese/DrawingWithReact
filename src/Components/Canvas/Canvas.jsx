import { useEffect, useState } from "react";
import './Canvas.css';

function Canvas() {

  useEffect(() => { 

    let width = "2";
    let color = 'gray';

    const canvas = document.getElementById("canvas");
    
    canvas.width = window.innerWidth - 100;
    canvas.height = 400;

    let context = canvas.getContext("2d");
//     let start_background_color = "white"; 
// context.fillStyle = start_background_color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    const background = new Image();
background.src = "https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

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
canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);
    canvas.addEventListener("touchend", stopDrawing, false);
canvas.addEventListener("mouseup", stopDrawing, false);
canvas.addEventListener("mouseout", stopDrawing, false);

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
    if (event.type !== "mouseout") {
      restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  index += 1;
  }

  }

function clear_canvas() {
  // context.fillStyle = start_background_color;
  const background = new Image();
  background.src = "https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  background.onload = function(){
    context.drawImage(background,0,0);   
}
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  restore_array = [];
  index = -1;
}
    
function undo_last() {
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
    
    document.querySelector('#red-color-field').addEventListener("click", () => color = 'red')
    document.querySelector('#blue-color-field').addEventListener("click", () => color = 'blue')
    document.querySelector('#green-color-field').addEventListener("click", () => color = 'green')
    document.querySelector('#yellow-color-field').addEventListener("click", () => color = 'yellow')

    document.querySelector('#color-picker').addEventListener("input", (e) => color = e.target.value)
    document.querySelector('#pen-range').addEventListener("input", (e) => width =e.target.value)
    
  })

  return <canvas id="canvas"></canvas> 
  
}
export default Canvas;
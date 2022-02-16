function ColorPanel() {
  return (    <div className="colors">
    <p>Color: </p>
 
    <div className="test1"><div  id="red-color-field" className="color-field" ></div>
<div   id="blue-color-field" className="color-field" ></div>
<div  id="green-color-field" className="color-field" ></div>
<div   id="yellow-color-field" className="color-field"></div></div>
   
<p>Custom color: </p>
<input id="color-picker"  type="color" className="color-picker"/>
  </div> )
}
export default ColorPanel;
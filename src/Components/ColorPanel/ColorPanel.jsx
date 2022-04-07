import './ColorPanel.css';

function ColorPanel() {
  return (
    <div className="color-panel">
      <div className="colors">
        <div id="red-color-field" className="color-field">
        </div>
        <div id="blue-color-field" className="color-field" >
        </div>
        <div id="green-color-field" className="color-field" >
        </div>
        <div id="yellow-color-field" className="color-field">
        </div>
        <p>Custom color: </p>
        <input id="color-picker" type="color" className="color-picker" />
      </div>
  </div>)
}
export default ColorPanel;
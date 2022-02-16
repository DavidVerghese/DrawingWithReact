import './Tools.css';
import DownloadModal from '../DownloadModal/DownloadModal';
function Tools() {


  
  return <div className="tools">
    <div className="buttons">
      <button id="undo" type="button" className="button">Undo</button>
      <button id="clear" type="button" className="button">Clear</button>
      <button id="download" type="button" className="button">Download</button>
    </div>

    <DownloadModal/>
  


    <p>Brush size: </p>     
    <div className="width"> <input type="range" min="1" max="100" id="pen-range" className="pen-range" /></div>
   
</div>
}
export default Tools;
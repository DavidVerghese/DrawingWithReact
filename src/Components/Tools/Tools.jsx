import './Tools.css';
import DownloadModal from '../DownloadModal/DownloadModal';

function Tools() {


  
  return <div className="tools">


    <DownloadModal/>
  

    <i className="fa fa-paint-brush"></i>
    <i className="fas fa-brush"></i>
    <i className='fas fa-paint-roller'></i>

    <p>Brush size: </p>  
   
    <div className="width"> <input type="range" min="1" max="100" id="pen-range" className="pen-range" /></div>
   
</div>
}
export default Tools;
import './Tools.css';
import DownloadModal from '../DownloadModal/DownloadModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush, faPaintRoller, faBrush  } from "@fortawesome/free-solid-svg-icons"
function Tools() {


  
  return <div className="tools">


    <DownloadModal/>
  
    
    <FontAwesomeIcon id="small-paintbrush" className="fa fa-paint-brush" icon={faPaintBrush} />
    <FontAwesomeIcon id="medium-paintbrush" className="fa fa-paint-brush" icon={faPaintBrush} />
    <FontAwesomeIcon id="large-paintbrush" className="fa fa-paint-brush" icon={faBrush} />
    <FontAwesomeIcon id="paintroller" className="fa fa-paint-brush" icon={faPaintRoller} />

   
   
</div>
}
export default Tools;
import './Tools.css';
import DownloadModal from '../DownloadModal/DownloadModal';
import ColorModal from '../ColorModal/ColorModal';
import CustomColor from '../CustomColor/CustomColor';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush, faPaintRoller, faBrush  } from "@fortawesome/free-solid-svg-icons"
function Tools() {


  
  return <div className="tools">


    <DownloadModal/>
    
    <FontAwesomeIcon id="small-paintbrush" className="fa fa-paint-brush" icon={faPaintBrush} /> 
  <FontAwesomeIcon id="medium-paintbrush" className="fa fa-paint-brush" icon={faPaintBrush} />
    <FontAwesomeIcon id="large-paintbrush" className="fa fa-paint-brush" icon={faBrush} />
    <FontAwesomeIcon id="paintroller" className="fa fa-paint-brush" icon={faPaintRoller} />
    <div className="pick-color-outside">
      <div className="pick-color"></div>
    </div>
   
    <ColorModal />
    <CustomColor/>
   
</div>
}
export default Tools;
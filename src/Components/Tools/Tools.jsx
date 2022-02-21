import './Tools.css';
import DownloadModal from '../DownloadModal/DownloadModal';

function Tools() {


  
  return <div className="tools">


    <DownloadModal/>
  

    <i id="small-paintbrush" className="fa fa-paint-brush"></i>
    <i id="medium-paintbrush" className="fa fa-paint-brush"></i>
    <i id="large-paintbrush" className="fas fa-brush"></i>
    <i id="paintroller" className='fas fa-paint-roller'></i>
   
</div>
}
export default Tools;
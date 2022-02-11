import Modal from 'react-modal';
import {  useState } from "react";
import './DownloadModal.css';

function DownloadModal(props) {

  const { title, setTitle } = props;

  Modal.setAppElement('#root');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [name, setName] = useState('');
  const [imageQuality, setImageQuality] = useState('');

  return (<div>
     <button onClick={()=> setModalIsOpen(true)}>Download</button>

    <Modal className="download-modal" isOpen={modalIsOpen} onRequestClose={()=>{setModalIsOpen(false)}}>
      <h2>Download</h2>
      <label> <p>Title:  </p>
         <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label><p>Image Quality:  </p>
         <input type="text" placeholder="image quality" value={imageQuality} onChange={(e) => setImageQuality(e.target.value)}/>
      </label>
      
      <button onClick={() => { setModalIsOpen(false); console.log(title,imageQuality) }} id="download" type="button" className="button">Download</button>
    

</Modal></div>)
}
export default DownloadModal
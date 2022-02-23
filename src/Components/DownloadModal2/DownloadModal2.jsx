import Modal from 'react-modal';
import { useState } from "react";

function DownloadModal2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement('#root');
  return <div >
     <button onClick={()=> setModalIsOpen(true)}>Open Modal</button>
    <Modal isOpen={modalIsOpen} id="download-modal">
      <h2>Download your painting</h2>
      <form>
    <label>
    <p>Title: </p>
    <input placeholder="untitled" id="download-title" type="text" name="name" />
    </label>

    <label>
        <p>File type: </p>

        <select id="file-type" name="file-type">
  <option value="png">png</option>
  <option value="jpeg">jpeg</option>
        </select>
        
    </label>
      </form>
      
      <button id="start-download">OK</button>
      <button onClick={()=> setModalIsOpen(false)}>Close</button>
    </Modal>
   
    </div>
}
export default DownloadModal2;
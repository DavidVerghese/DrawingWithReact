import Modal from 'react-modal';
import {  useState } from "react";
import './DownloadModal.css';

function DownloadModal() {

  Modal.setAppElement('#root');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (<div>
     <button onClick={()=> setModalIsOpen(true)}>Open Modal</button>

    <Modal className="download-modal" isOpen={modalIsOpen} onRequestClose={()=>{setModalIsOpen(false)}}>
      <h2>Download your painting</h2>
      <input type="text" />
      <p>Modal Body</p>
      <button onClick={()=> setModalIsOpen(false)}>Close</button>

</Modal></div>)
}
export default DownloadModal
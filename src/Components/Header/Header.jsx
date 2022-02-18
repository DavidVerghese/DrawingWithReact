import './Header.css';
import { Link } from "react-router-dom";

function Header(props) {
  const { studio } = props;
  return <header>
   
    {studio ? <>
      <div className="logo"><Link to="/"><h2>{`< Canvas`} <i className="fa fa-paint-brush"></i></h2></Link></div>
      <i id="undo" className="fa fa-undo" aria-hidden="true"></i>
      
      <i id="clear" className="fas fa-trash-alt"></i>
      <i id="download" className="fa fa-save"></i>
    </> :  <div className="logo"><h2> Canvas <i className="fa fa-paint-brush"></i></h2></div>}
  </header>
}
export default Header;
import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush,faUndo, faTrash, faSave } from "@fortawesome/free-solid-svg-icons"


function Header(props) {
  const { studio } = props;
  return (
    <header>
      {studio ?
        <>
          <div className="logo">
            <Link to="/">
              <h1>
                {`< Draw The Line`} <FontAwesomeIcon icon={faPaintBrush} />
              </h1>
            </Link>
          </div>
          <FontAwesomeIcon id="undo" icon={faUndo} />
          <FontAwesomeIcon id="clear" icon={faTrash} />
          <FontAwesomeIcon id="download" icon={faSave} />
        </> :
        <div className="logo">
          <h1>
            Draw The Line  <FontAwesomeIcon icon={faPaintBrush} />
            <hr />
            
          </h1>
        </div>}
  </header>)
}
export default Header;
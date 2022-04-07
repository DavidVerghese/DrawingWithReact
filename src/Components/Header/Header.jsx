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
              <h2>
                {`< Draw The Line`} <FontAwesomeIcon icon={faPaintBrush} />
              </h2>
            </Link>
          </div>
          <FontAwesomeIcon id="undo" icon={faUndo} />
          <FontAwesomeIcon id="clear" icon={faTrash} />
          <FontAwesomeIcon id="download" icon={faSave} />
        </> :
        <div className="logo">
          <h2>
            Draw The Line  <FontAwesomeIcon icon={faPaintBrush} />
          </h2>
        </div>}
  </header>)
}
export default Header;
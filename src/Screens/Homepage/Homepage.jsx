import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from "react-router-dom";
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <h2>Ready to paint?</h2>
      <Link to="/canvas">
        <button>Enter the studio</button>
      </Link>
      <img id="painting-gif" alt="painting" src="https://media1.giphy.com/media/kfip29oFQf9mjhJVa0/200.gif" />
      {/* <Footer/> */}
    </div>)
}
export default Homepage;
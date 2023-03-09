import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar_content">
        <div className="NavBar_brand">
          <Link to="/">
            <div className="NavBar_logo-wrapper">
              <h1>BRAND NAME</h1>
            </div>
          </Link>
        </div>

        <ul className="NavBar_links">
          <li>
            <Link to="/" className="NavBar_link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="NavBar_link">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

import { Link } from 'react-router-dom';
import NavBarCart from './NavBarCart';
import '../styles/NavBar.css';

const NavBar = ({ cart, openCart }) => {
  return (
    <div className="NavBar">
      <div className="NavBar_content">
        <div className="NavBar_brand">
          <Link to="/">
            <div className="NavBar_logo-wrapper">
              <h1>ASTRYLE</h1>
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

        <NavBarCart cart={cart} openCart={openCart} />
      </div>
    </div>
  );
};

export default NavBar;

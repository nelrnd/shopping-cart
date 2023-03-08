import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar_content">
        <div className="NavBar_brand">
          <div className="NavBar_logo-wrapper">
            <h1>BRAND NAME</h1>
          </div>
        </div>

        <ul className="NavBar_links">
          <li>Home</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

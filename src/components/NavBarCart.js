import Icon from '../assets/shopping-bag.svg';

const NavBarCart = ({ cart }) => {
  return (
    <div className="NavBarCart">
      <div className="NavBarCart_icon-wrapper">
        <img src={Icon} alt="Shopping bag" />
      </div>

      {cart.length > 0 && <div className="NavBarCart_items-number">3</div>}
    </div>
  );
};

export default NavBarCart;

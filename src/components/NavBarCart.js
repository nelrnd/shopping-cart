import Icon from '../assets/shopping-bag.svg';

const NavBarCart = ({ cart }) => {
  const itemsNumber = cart.reduce(
    (total, curr) => total + (curr.quantity || 1),
    0
  );

  return (
    <div className="NavBarCart">
      <div className="NavBarCart_icon-wrapper">
        <img src={Icon} alt="Shopping bag" />
      </div>

      {itemsNumber > 0 && (
        <div className="NavBarCart_items-number" data-test-id="items-number">
          {itemsNumber < 10 ? itemsNumber : '+9'}
        </div>
      )}
    </div>
  );
};

export default NavBarCart;

import CartItem from './CartItem';
import '../styles/Cart.css';
import CloseIcon from '../assets/close.svg';

const Cart = ({ cart, setCart, isOpen, closeCart }) => {
  const itemsNumber = cart.reduce(
    (total, curr) => total + (curr.quantity || 1),
    0
  );
  const totalPrice = cart.reduce(
    (total, curr) => total + curr.price * (curr.quantity || 1),
    0
  );

  return (
    <div className={`Cart_container${isOpen ? ' open' : ''}`}>
      <div className="Cart">
        <div className="Cart_header">
          <h2>
            My cart <span className="regular">({itemsNumber})</span>
          </h2>
          <button onClick={closeCart}>
            <img src={CloseIcon} alt="Close Cart" />
          </button>
        </div>

        <div className="Cart_list">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartItem
                key={index}
                title={item.title}
                brand={item.brand}
                price={item.price}
                imageUrl={item.imageUrl}
                size={item.size}
                quantity={item.quantity}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Your cart is empty</p>
          )}
        </div>

        <div className="Cart_bottom">
          <div className="Cart_total-pricing">
            <p>Total</p>
            <p>
              <strong>${totalPrice}</strong>
            </p>
          </div>

          <button className="main">Checkout</button>
        </div>
      </div>

      <div className="Cart_background" onClick={closeCart}></div>
    </div>
  );
};

export default Cart;

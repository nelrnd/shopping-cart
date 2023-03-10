import '../styles/Cart.css';

const Cart = ({ cart, isOpen, closeCart }) => {
  const itemsNumber = cart.reduce(
    (total, curr) => total + (curr.quantity || 1),
    0
  );
  const totalPrice = cart.reduce(
    (total, curr) => total + curr.price * (curr.quantity || 1),
    0
  );

  const handleClick = () => console.log(cart);

  return (
    <div className={`Cart_container${isOpen ? ' open' : ''}`}>
      <div className="Cart">
        <div className="Cart_header">
          <h2>
            My cart <span className="regular">({itemsNumber})</span>
          </h2>
          <button onClick={closeCart}>Close</button>
        </div>

        <ul className="Cart_list">
          {cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>

        <div className="Cart_bottom">
          <div className="Cart_total-pricing">
            <p>Total</p>
            <p>
              <strong>{totalPrice}</strong>
            </p>
          </div>

          <button className="main" onClick={handleClick}>
            Checkout
          </button>
        </div>
      </div>

      <div className="Cart_background" onClick={closeCart}></div>
    </div>
  );
};

export default Cart;

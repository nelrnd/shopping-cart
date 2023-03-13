import '../styles/CartItem.css';

const CartItem = ({
  title,
  brand,
  price,
  imageUrl,
  size,
  quantity,
  cart,
  setCart,
}) => {
  const incrementQuantity = () => {
    const cartCopy = [...cart];
    const item = cartCopy.find(
      (item) =>
        item.title === title && item.brand === brand && item.price === price
    );
    item.quantity++;
    setCart(cartCopy);
  };

  const decrementQuantity = () => {
    const cartCopy = [...cart];
    const item = cartCopy.find(
      (item) =>
        item.title === title && item.brand === brand && item.price === price
    );
    item.quantity--;
    if (item.quantity === 0) {
      removeFromCart();
    } else {
      setCart(cartCopy);
    }
  };

  const handleQuantityChange = (e) => {
    const cartCopy = [...cart];
    const item = cartCopy.find(
      (item) =>
        item.title === title && item.brand === brand && item.price === price
    );
    item.quantity = parseInt(e.target.value);
    if (item.quantity < 1) {
      removeFromCart();
    } else {
      setCart(cartCopy);
    }
  };

  const removeFromCart = () => {
    const cartCopy = [...cart];
    const itemIndex = cartCopy.findIndex(
      (item) =>
        item.title === title && item.brand === brand && item.price === price
    );
    cartCopy.splice(itemIndex, 1);
    setCart(cartCopy);
  };

  return (
    <div className="CartItem" data-testid="CartItem">
      <div className="CartItem_img-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="CartItem_text-wrapper">
        <h3>{`${brand} ${title}`}</h3>
        <p>Size : {size}</p>
        <p>${price}</p>
      </div>

      <div className="CartItem_interaction-wrapper">
        <div className="CartItem_quantity-wrapper">
          <button onClick={decrementQuantity}>-</button>

          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="20"
          />

          <button
            onClick={incrementQuantity}
            disabled={quantity >= 20 ? true : ''}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import '../styles/CartItem.css';

const CartItem = ({ title, brand, price, imageUrl, size, quantity }) => {
  return (
    <div className="CartItem">
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
          <button disabled={quantity <= 1 ? true : ''}>-</button>

          <input type="number" value={quantity} min="1" max="20" />

          <button disabled={quantity >= 20 ? true : ''}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

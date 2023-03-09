import { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ title, imageUrl, price }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity - 1);

  return (
    <div className="ProductCard">
      <div className="ProductCard_img-wrapper">
        <img className="ProductCard_img" src={imageUrl} alt={title} />
      </div>

      <div className="ProductCard_text-wrapper">
        <h3 className="ProductCard_title">{title}</h3>
        <p className="ProductCard_price">{price}$</p>
      </div>

      <div className="ProductCard_interaction-wrapper">
        <div className="ProductCard_quantity-wrapper">
          <button
            onClick={decrementQuantity}
            disabled={quantity === 1 ? 'true' : ''}
          >
            -
          </button>
          <input type="number" value={quantity} />
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

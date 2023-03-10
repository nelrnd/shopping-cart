import { useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/ProductCard.css';

const ProductCard = ({ title, brand, price, sizes, imageUrl, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity - 1);
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value));
  const handleSizeChange = (value) => setSize(value);

  const handleAddToCartClick = () => {
    if (!size) return;
    const item = { title, brand, price, imageUrl, size, quantity };
    addToCart(item);
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard_img-wrapper">
        <img className="ProductCard_img" src={imageUrl} alt={title} />
      </div>

      <div className="ProductCard_text-wrapper">
        <h3 className="ProductCard_title">{`${brand} ${title}`}</h3>
        <p className="ProductCard_price">{price}$</p>
      </div>

      <div className="ProductCard_interaction-wrapper">
        <div className="ProductCard_interaction-row">
          <Dropdown
            title="Select size"
            items={sizes}
            handleChange={handleSizeChange}
          />

          <div className="ProductCard_quantity-wrapper">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1 ? true : ''}
            >
              -
            </button>

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

        <button className="main" onClick={handleAddToCartClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

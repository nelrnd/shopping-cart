import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import catalog from '../catalog.json';

const Shop = () => {
  const [items, setItems] = useState([]);

  const loadItems = () => {
    const catalogCopy = [...catalog];
    setItems(catalogCopy);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>Shop page</h1>

      <div className="grid">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            title={item.brand + ' ' + item.title}
            price={item.price}
            sizes={item.sizes}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

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
    <div className="page">
      <section className="products-display">
        {items.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            brand={item.brand}
            price={item.price}
            sizes={item.sizes}
            imageUrl={item.imageUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default Shop;

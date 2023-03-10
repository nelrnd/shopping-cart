import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const cartCopy = [...cart];
    const sameItem = cartCopy.find(
      (item) =>
        item.title === newItem.title &&
        item.brand === newItem.brand &&
        item.price === newItem.price &&
        item.size === newItem.size
    );

    if (sameItem) {
      sameItem.quantity += newItem.quantity;
      setCart(cartCopy);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

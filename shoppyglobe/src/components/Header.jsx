import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <h2>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>ShoppyGlobe</Link>
      </h2>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          🛍️ Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
};

export default Header;

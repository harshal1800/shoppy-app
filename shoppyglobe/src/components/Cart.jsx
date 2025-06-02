import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Cart Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

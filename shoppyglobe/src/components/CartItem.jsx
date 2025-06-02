import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value, 10);
    if (qty > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: qty }));
    }
  };

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <label>
        Quantity:
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: '60px', marginLeft: '0.5rem' }}
        />
      </label>
      <br />
      <button onClick={handleRemove} style={{ marginTop: '0.5rem' }}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;

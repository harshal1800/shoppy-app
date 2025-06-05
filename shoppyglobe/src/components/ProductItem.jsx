import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          {product.title}
        </Link>
      </h3>
     <p style={{ color: 'black' }}>${product.price}</p>
 <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

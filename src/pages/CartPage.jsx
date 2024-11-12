import React from 'react';
import { useCart } from '../components/Layout/CartContext';
import { NavLink } from 'react-router-dom';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); 

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="/images/empty.png" alt="empty" />
          <p>Your cart is empty.</p>
          <NavLink to="/product" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <h4 className="card-title">{item.title}</h4>
              <p>Price: ${item.price}</p>
              
              <div className="quantity-container">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                >
                  +
                </button>
              </div>

              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

              <div className="cart-btn">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <NavLink to="/product" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions';
import Style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <>
        <Style.CartHeader>
          <h2>Cart</h2>
        </Style.CartHeader>
        <Style.CartPage>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((product) => (
                <Style.CartProduct key={product.id}>
                  <Style.ProductDesc>
                    <img src={product.images[0]} width="150px" height="150px" alt={product.title} className="cart-product-image" />
                    <Style.TitlePrice>
                      <span>{product.title}</span>
                      <p>Price: ${product.price}</p>
                      <Style.QuantityControls>
                        <Style.MinusButton disabled={product.quantity === 1} onClick={() => handleDecreaseQuantity(product.id)}>-</Style.MinusButton>
                        <span>{product.quantity}</span>
                        <Style.PlusButton disabled={product.quantity === 10} onClick={() => handleIncreaseQuantity(product.id)}>+</Style.PlusButton>
                      </Style.QuantityControls>
                    </Style.TitlePrice>
                  </Style.ProductDesc>
                  <Style.RemoveButton onClick={() => handleRemoveFromCart(product.id)}>Remove</Style.RemoveButton>
                  <Style.CrossMark onClick={() => handleRemoveFromCart(product.id)}><FontAwesomeIcon icon={faXmark} /></Style.CrossMark>
                </Style.CartProduct>
              ))}
            </ul>
          )}
        </Style.CartPage>
    </>
  );
}

export default Cart;

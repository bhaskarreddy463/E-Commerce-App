import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/actions';
import Style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Product({ product }) {
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if(addedToCart){
            navigate('/cart');
        } else {
            dispatch(addToCart(product));
            setAddedToCart(true);
        }
      };
  return (
    <>
        <Style.Product>
            <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
                <Style.ImageRightArrow>
                    <img src={product.images[0]} alt={product.title} />
                    <Style.ChevronRightIcon icon={faChevronRight} />
                </Style.ImageRightArrow>
            </Link>
            <Style.PriceAddCart>
                <p>Price: ${product.price}</p>
                <button onClick={handleAddToCart}> 
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {addedToCart ? 'Show Cart' : 'Add to Cart'}
                </button>
            </Style.PriceAddCart>
        </Style.Product>
    </>
  );
}

export default Product;

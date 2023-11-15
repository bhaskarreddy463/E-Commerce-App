import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProductDetail } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Style from './style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductListHeader from '../ProductListHeader/ProductListHeader';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state: any) => state.root.productDetail);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (addedToCart) {
      navigate('/cart');
    } else {
      dispatch(addToCart(product));
      setAddedToCart(true);
    }
  };

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ProductListHeader titleName = "Product Detail" />
      <Style.ProductDetail>
        {product ? (
          <Style.DetailContent>
            <Style.DetailImages>
              <Slider {...carouselSettings}>
                {product.images.map((image, index) => (
                  <img width='200px' height='200px' key={index} src={image} alt={`Product ${index + 1}`} />
                ))}
              </Slider>
            </Style.DetailImages>
            <Style.ProductDetailInfo>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <Style.AddCartBtn onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {addedToCart ? 'Show Cart' : 'Add to Cart'}
              </Style.AddCartBtn>
            </Style.ProductDetailInfo>
          </Style.DetailContent>
        ) : (
          <p>Loading...</p>
        )}
      </Style.ProductDetail>
    </>
  );
}

export default ProductDetail;

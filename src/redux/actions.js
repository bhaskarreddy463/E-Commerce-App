import axios from 'axios';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const fetchProducts = () => {
  return (dispatch) => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
};

export const setProductDetail = (product) => ({
    type: 'SET_PRODUCT_DETAIL',
    payload: product,
  });
  
export const fetchProductDetail = (productId) => {
    return (dispatch) => {
        const apiUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
        axios
        .get(apiUrl)
        .then((response) => {
            dispatch(setProductDetail(response.data));
        })
        .catch((error) => {
            console.error('Error fetching product detail:', error);
        });
    };
};

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
});

export const increaseQuantity = (productId) => ({
    type: 'INCREASE_QUANTITY',
    payload: productId,
  });
  
  export const decreaseQuantity = (productId) => ({
    type: 'DECREASE_QUANTITY',
    payload: productId,
  });

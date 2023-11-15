const initialState = {
    products: [],
    productDetail: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'SET_PRODUCT_DETAIL':
        return { ...state, productDetail: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
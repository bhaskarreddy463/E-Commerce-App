const MAX_QUANTITY = 10;

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.items.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity < MAX_QUANTITY ? product.quantity + 1 : product.quantity }
              : product
          ),
        };
      }
      // If the product is not in the cart, add it with quantity 1
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload ? { ...product, quantity: product.quantity < MAX_QUANTITY ? product.quantity + 1: product.quantity } : product
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
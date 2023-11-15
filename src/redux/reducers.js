import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import cartReducer from './cartReducer';

const combinedReducer = combineReducers({
  root: rootReducer,
  cart: cartReducer,
});

export default combinedReducer;

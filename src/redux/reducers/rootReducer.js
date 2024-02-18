import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
import { combineReducers } from 'redux';
import { AppResizeReducers } from './appResize.reducers';
import { HomeReducers } from './home.reducer';
import { ShoppingCartReducers } from './shoppingCart.reducers';
const mainReducers = combineReducers({
  HOME: HomeReducers.startHomeReducer,
  resizeApp: AppResizeReducers.reducersResizeApp,
  shoppingCart: ShoppingCartReducers.reducersShoppingCart,
});

export default mainReducers;

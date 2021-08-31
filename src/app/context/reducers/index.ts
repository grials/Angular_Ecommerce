import { combineReducers } from 'redux';
import { AboutUsReducers } from './aboutUs.reducers';
import { AppResizeReducers } from './appResize.reducers';
import { HomeReducers } from './home.reducer';
import { QuestionsPageReducers } from './questions.reducers';
import { ShoppingCartReducers } from './shoppingCart.reducers';
import { StoreShopReducers } from './storeShop.reducers';

const mainReducers = combineReducers({
  HOME: HomeReducers.startHomeReducer,
  resizeApp: AppResizeReducers.reducersResizeApp,
  shoppingCart: ShoppingCartReducers.reducersShoppingCart,
  STORE_SHOP: StoreShopReducers.reducersStoreShop,
  ABOUT_US: AboutUsReducers.reducersAboutUs,
  QUESTIONS: QuestionsPageReducers.reducersPageQuestions,
});

export default mainReducers;

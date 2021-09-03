import { aboutUsObject } from 'src/app/context/objects/aboutUs.object';
import { carShoppingObject } from './carShop.object';
import { contactObject } from './contact.object';
import { homeObject } from './home.object';
import { questionsObject } from './questions.object';
import { resize } from './resize.object';
import { shoopping_car } from './shoopingCar.object';
import { storeShopObject } from './storeShop.object';
import { viewProductObject } from './viewProduct.object';

export const initialObject = {
  HOME: homeObject.español,
  resizeApp: resize,
  shoppingCart: shoopping_car.español,
  STORE_SHOP: storeShopObject.español,
  ABOUT_US: aboutUsObject.español,
  QUESTIONS: questionsObject.español,
  CONTACT: contactObject.español,
  VIEW_PRODUCT_PAGE: viewProductObject.español,
  carShop: carShoppingObject,
};

import { createStore, Store } from 'redux';
import { ILanguageAboutUs } from 'src/app/interfaces/Objects/aboutUs.interface';
import { ICarShop } from 'src/app/interfaces/Objects/carShop.interface';
import { ILanguageContactPage } from 'src/app/interfaces/Objects/contact.interface';
import { IHeader } from 'src/app/interfaces/Objects/home.state.interface';
import { ILanguageQuestions } from 'src/app/interfaces/Objects/questions.interface';
import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';
import { ILanguageShopping } from 'src/app/interfaces/Objects/shoppingCart.interface';
import { ILanguageStoreShop } from 'src/app/interfaces/Objects/storeShop.interface';
import { ILanguageViewProductPage } from 'src/app/interfaces/Objects/viewProduct.interface';
import { initialObject } from '../objects';
import mainReducers from '../reducers';

export class MyStore {
  static mainStore: Store;

  public static startStore(): void {
    MyStore.mainStore = createStore(mainReducers, initialObject);
  }

  public static getStore(): any {
    return MyStore.mainStore.getState();
  }

  public static getStateHome(): IHeader {
    return MyStore.mainStore.getState().HOME;
  }

  public static getResizeApp(): IResize {
    return MyStore.mainStore.getState().resizeApp;
  }

  public static getShoppingCart(): ILanguageShopping {
    return MyStore.mainStore.getState().shoppingCart;
  }

  public static getStoreShop(): ILanguageStoreShop {
    return MyStore.mainStore.getState().STORE_SHOP;
  }

  public static getAboutUs(): ILanguageAboutUs {
    return MyStore.mainStore.getState().ABOUT_US;
  }
  public static getQuestions(): ILanguageQuestions {
    return MyStore.mainStore.getState().QUESTIONS;
  }

  public static getContactPage(): ILanguageContactPage {
    return MyStore.mainStore.getState().CONTACT;
  }

  public static getViewProductPage(): ILanguageViewProductPage {
    return MyStore.mainStore.getState().VIEW_PRODUCT_PAGE;
  }
  public static getCarShop(): ICarShop {
    return MyStore.mainStore.getState().carShop;
  }
}

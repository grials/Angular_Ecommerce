import { createStore, Store } from 'redux';
import { ILanguageAboutUs } from 'src/app/interfaces/Objects/aboutUs.interface';
import { IHeader } from 'src/app/interfaces/Objects/home.state.interface';
import { ILanguageQuestions } from 'src/app/interfaces/Objects/questions.interface';
import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';
import { ILanguageShopping } from 'src/app/interfaces/Objects/shoppingCart.interface';
import { ILanguageStoreShop } from 'src/app/interfaces/Objects/storeShop.interface';
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
}

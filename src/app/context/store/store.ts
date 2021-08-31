import { createStore, Store } from 'redux';
import {
  IHeader,
  IHomeObject,
} from 'src/app/interfaces/Objects/home.state.interface';
import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';
import { ILanguageShopping } from 'src/app/interfaces/Objects/shoppingCart.interface';
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
}

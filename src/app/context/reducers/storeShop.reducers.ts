import { ILanguageStoreShop } from './../../interfaces/Objects/storeShop.interface';
import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';

export class StoreShopReducers {
  static reducersStoreShop(
    state: ILanguageStoreShop | {} = {},
    action: IAction
  ): ILanguageStoreShop | {} {
    try {
      switch (action.type) {
        case ' ':
          return state;

        default:
          return state;
      }
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

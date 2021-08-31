import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { ILanguageShopping } from 'src/app/interfaces/Objects/shoppingCart.interface';

export class ShoppingCartReducers {
  static reducersShoppingCart(
    state: ILanguageShopping | {} = {},
    action: IAction
  ): ILanguageShopping | {} {
    try {
      switch (action.type) {
        case '':
          return state;

        default:
          return state;
      }
    } catch (error) {
      console.log('Error');
      return {};
    }
  }
}

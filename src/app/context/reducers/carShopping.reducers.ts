import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { IProductInCar } from './../../interfaces/Objects/carShop.interface';
export class CarShoppingReducers {
  static reducerCarShopping(
    state: IProductInCar | {} = {},
    action: IAction
  ): IProductInCar | {} {
    try {
      switch (action.type) {
        case '':
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

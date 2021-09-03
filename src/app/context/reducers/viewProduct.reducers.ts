import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { ILanguageViewProductPage } from 'src/app/interfaces/Objects/viewProduct.interface';

export class ViewProductReducers {
  static reducersViewProduct(
    state: ILanguageViewProductPage | {} = {},
    action: IAction
  ): ILanguageViewProductPage | {} {
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

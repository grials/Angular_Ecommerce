import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { ILanguageContactPage } from './../../interfaces/Objects/contact.interface';
export class ContactPageReducers {
  static reducerContactPage(
    state: ILanguageContactPage | {} = {},
    action: IAction
  ): ILanguageContactPage | {} {
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

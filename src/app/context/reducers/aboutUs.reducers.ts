import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { ILanguageAboutUs } from 'src/app/interfaces/Objects/aboutUs.interface';

export class AboutUsReducers {
  static reducersAboutUs(
    state: ILanguageAboutUs | {} = {},
    action: IAction
  ): ILanguageAboutUs | {} {
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

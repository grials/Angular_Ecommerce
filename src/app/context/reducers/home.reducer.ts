import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { IHomeObject } from 'src/app/interfaces/Objects/home.state.interface';

export class HomeReducers {
  static LANGUAGE_SPANISH: string = 'LANG_SPANISH';
  constructor() {}

  public static startHomeReducer(
    state: IHomeObject | {} = {},
    action: IAction
  ): IHomeObject | {} {
    switch (action.type) {
      case HomeReducers.LANGUAGE_SPANISH:
        return state;

      default:
        return state;
    }
  }
}

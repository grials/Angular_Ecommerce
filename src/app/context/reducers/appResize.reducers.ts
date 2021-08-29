import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';

export class AppResizeReducers {
  static MOVILE: string = 'IS_MOVILE';
  static TABLET: string = 'IS_TABLET';
  static DESKTOP: string = 'IS_DESKTOP';

  static reducersResizeApp(
    state: IResize | {} = {},
    action: IAction
  ): IResize | {} {
    // console.log(action.value);
    try {
      switch (action.type) {
        case AppResizeReducers.MOVILE:
          return action.value;

        case AppResizeReducers.TABLET:
          return action.value;

        case AppResizeReducers.DESKTOP:
          return action.value;

        default:
          return state;
      }
    } catch (error) {
      console.log('error', state);
      return {};
    }
  }
}

import { IAction } from 'src/app/interfaces/IActions/actions.interfaces';
import { AppResizeReducers } from '../reducers/appResize.reducers';

export class ResizeAction {
  static resize: number = 0;

  static dispatchResizeMovile(size: number): IAction {
    return {
      type: AppResizeReducers.MOVILE,
      value: {
        width: size,
        movile: true,
        tablet: false,
        desktop: false,
      },
    };
  }

  static dispatchResizeTablet(size: number): IAction {
    return {
      type: AppResizeReducers.MOVILE,
      value: {
        width: size,
        movile: false,
        tablet: true,
        desktop: false,
      },
    };
  }

  static dispatchResizeDesktop(size: number): IAction {
    return {
      type: AppResizeReducers.DESKTOP,
      value: {
        width: size,
        movile: false,
        tablet: false,
        desktop: true,
      },
    };
  }
}

import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';

export const resize: IResize = {
  width: window.innerWidth,
  movile: window.innerWidth <= 320,
  tablet: window.innerWidth > 320 && window.innerWidth < 720 ? true : false,
  desktop: window.innerWidth >= 720 ? true : false,
};

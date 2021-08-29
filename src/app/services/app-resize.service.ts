import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';
import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { MyStore } from '../context/store/store';
import { ResizeAction } from '../context/actions/eventResize.action';

@Injectable({
  providedIn: 'root',
})
export class AppResizeService {
  private resizeObservable$: Observable<Event> | null = null;
  private resizeSubscription$: Subscription | null = null;
  private resizeApp: IResize | null = null;
  constructor() {}

  public startObservingResize(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      const window: any = evt.target;
      let width: number = window.innerWidth;
      this.isDisposed(width);
      this.resizeApp = MyStore.getResizeApp();
    });
  }
  private isDisposed(width: number): void {
    if (width <= 320) {
      MyStore.mainStore.dispatch(ResizeAction.dispatchResizeMovile(width));
    } else if (width > 320 && width <= 720) {
      MyStore.mainStore.dispatch(ResizeAction.dispatchResizeTablet(width));
    } else if (width > 720) {
      MyStore.mainStore.dispatch(ResizeAction.dispatchResizeDesktop(width));
    }
  }
  public getResizeApp(): IResize | null {
    return this.resizeApp;
  }
}

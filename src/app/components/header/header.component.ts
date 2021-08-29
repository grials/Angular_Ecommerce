import { IResize } from './../../interfaces/Objects/resize.state.interface';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';
import { IHeader } from 'src/app/interfaces/Objects/home.state.interface';
import { AppResizeService } from 'src/app/services/app-resize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public language: IHeader = MyStore.getStateHome();
  // public width: number = MyStore.getResizeApp().width;

  public appResize: IResize | null = null;

  constructor(private AppResizeService: AppResizeService) {}

  ngOnInit(): void {
    this.appResize = MyStore.getResizeApp();
  }

  ngDoCheck(): void {
    this.appResize =
      this.AppResizeService.getResizeApp() || MyStore.getResizeApp();
  }
}

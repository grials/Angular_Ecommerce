import { Component, OnInit } from '@angular/core';
import { MyStore } from './context/store/store';
import { AppResizeService } from './services/app-resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private AppResizeService: AppResizeService) {}

  ngOnInit() {
    MyStore.startStore();
    this.AppResizeService.startObservingResize();
  }
}

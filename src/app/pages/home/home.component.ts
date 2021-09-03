import { Router } from '@angular/router';
import { AppResizeService } from 'src/app/services/app-resize.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { IResize } from 'src/app/interfaces/Objects/resize.state.interface';
import { MyStore } from 'src/app/context/store/store';
import { IHomeContent } from 'src/app/interfaces/Objects/home.state.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  public resizeApp: IResize | null = null;
  public language: IHomeContent | null = null;
  constructor(
    private router: Router,
    private AppResizeService: AppResizeService
  ) {}

  ngOnInit(): void {
    this.resizeApp = MyStore.getResizeApp();
  }
  ngDoCheck(): void {
    this.resizeApp =
      this.AppResizeService.getResizeApp() || MyStore.getResizeApp();
    this.language = MyStore.getStateHome().homeContent;
  }

  goViewProduct(id: number) {
    this.router.navigateByUrl(`/products/product/${id}`);
  }
}

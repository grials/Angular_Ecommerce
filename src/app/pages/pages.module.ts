import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ComponentsModule } from '../components/components.module';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  declarations: [
    HomeComponent,
    Page404Component,
    ThankYouComponent,
    ShoppingCarComponent,
    CheckOutComponent,
  ],
  imports: [CommonModule, ComponentsModule, RouterModule],
  exports: [
    HomeComponent,
    Page404Component,
    ThankYouComponent,
    ShoppingCarComponent,
  ],
})
export class PagesModule {}

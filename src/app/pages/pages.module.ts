import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ComponentsModule } from '../components/components.module';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    HomeComponent,
    Page404Component,
    ThankYouComponent,
    CheckOutComponent,
    AboutUsComponent,
    ContactComponent,
    QuestionsComponent,
    ViewProductComponent,
    StoreComponent,
  ],
  imports: [CommonModule, ComponentsModule, RouterModule, MDBBootstrapModule],
  exports: [HomeComponent, Page404Component, ThankYouComponent],
})
export class PagesModule {}

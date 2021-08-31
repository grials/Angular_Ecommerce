import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppResizeService } from './services/app-resize.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
  ],
  providers: [AppResizeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

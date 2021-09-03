import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { AppResizeService } from '../services/app-resize.service';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConnectionService } from '../services/connection.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HamburguerMenuComponent,
    ProductComponent,
    ShoppingCarComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  providers: [AppResizeService, ConnectionService],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ContactFormComponent,
  ],
})
export class ComponentsModule {}

import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';
import { ILanguageShopping } from 'src/app/interfaces/Objects/shoppingCart.interface';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss'],
})
export class ShoppingCarComponent implements OnInit {
  public language: ILanguageShopping | null = null;
  public isActive: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getShoppingCart();
  }

  openMenu() {
    this.isActive = true;
  }

  closeMenu() {
    this.isActive = false;
    console.log('close');
  }
}

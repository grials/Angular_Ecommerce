import {
  ILanguageStoreShop,
  IStoreShop,
} from './../../interfaces/Objects/storeShop.interface';
import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public language: ILanguageStoreShop | null = null;
  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getStoreShop();
  }
  getlangugae() {
    console.log(this.language);
  }
}

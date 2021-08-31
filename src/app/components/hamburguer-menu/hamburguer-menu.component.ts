import { MyStore } from 'src/app/context/store/store';
import { IItemNavBar } from './../../interfaces/Objects/home.state.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss'],
})
export class HamburguerMenuComponent implements OnInit {
  public linksHamMenu: IItemNavBar[] | null = null;
  public isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.linksHamMenu = MyStore.getStateHome().header.navBar;
  }

  closeMenu() {
    this.isActive = false;
  }

  openMenu() {
    this.isActive = true;
  }
}

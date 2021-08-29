import { IItemNavBar } from './../../interfaces/Objects/home.state.interface';
import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public linksNavBar: IItemNavBar[] | null = null;
  constructor() {}

  ngOnInit(): void {
    this.linksNavBar = MyStore.getStateHome().header.navBar;
  }
}

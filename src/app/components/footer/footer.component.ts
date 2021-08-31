import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';
import { IFooter } from 'src/app/interfaces/Objects/home.state.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public language: IFooter | null = null;
  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getStateHome().footer;
  }
}

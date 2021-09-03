import { IHeaderContactPage } from './../../interfaces/Objects/contact.interface';
import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public language: IHeaderContactPage | null = null;
  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getContactPage().header;
  }
}

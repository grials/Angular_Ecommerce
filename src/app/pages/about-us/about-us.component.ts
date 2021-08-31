import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';
import { ILanguageAboutUs } from 'src/app/interfaces/Objects/aboutUs.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public language: ILanguageAboutUs | null = null;

  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getAboutUs();
  }
}

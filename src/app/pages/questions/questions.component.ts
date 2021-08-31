import { ILanguageQuestions } from './../../interfaces/Objects/questions.interface';
import { Component, OnInit } from '@angular/core';
import { MyStore } from 'src/app/context/store/store';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public language: ILanguageQuestions | null = null;

  constructor() {}

  ngOnInit(): void {
    this.language = MyStore.getQuestions();
  }
}

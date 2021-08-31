export interface IPageQuestions {
  español: ILanguageQuestions;
  english: ILanguageQuestions;
}

export interface IHeaderQuestions {
  title: string;
}

export interface IQuestion {
  title: string;
  content: string;
}

export interface ILanguageQuestions {
  header: IHeaderQuestions;
  questions: IQuestion[];
}

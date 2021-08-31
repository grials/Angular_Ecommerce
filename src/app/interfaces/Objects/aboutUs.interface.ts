export interface IAboutUs {
  español: ILanguageAboutUs;
  english: ILanguageAboutUs;
}

export interface ILanguageAboutUs {
  title: string;
  paragraph: IParagraph[];
  img: string;
}

export interface IParagraph {
  id: number;
  content: string;
}

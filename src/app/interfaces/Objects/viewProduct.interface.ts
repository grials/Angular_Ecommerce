export interface IViewProductPage {
  español: ILanguageViewProductPage;
  english: ILanguageViewProductPage;
}

export interface ILanguageViewProductPage {
  header: IHeaderViewProductPage;
  content: IContentViewProductPage;
  textButton: string;
}

export interface IHeaderViewProductPage {
  title: string;
}

export interface IContentViewProductPage {
  caption: string;
  title: string;
  politics: IPoliticsViewProduct;
}

export interface IPoliticsViewProduct {
  title: string;
  paragraph: string;
}

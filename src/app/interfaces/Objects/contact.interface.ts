export interface IContactPage {
  español: ILanguageContactPage;
  english: ILanguageContactPage;
}

export interface ILanguageContactPage {
  header: IHeaderContactPage;
  form: IFormContactPage;
}

export interface IHeaderContactPage {
  title: string;
  adrress: string;
  telephone: string;
  email: string;
  fax: string;
}

export interface IFormContactPage {
  name: string;
  email: string;
  msg: string;
}

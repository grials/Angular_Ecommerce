import { IProduct } from './home.state.interface';

export interface IStoreShop {
  español: ILanguageStoreShop;

  english: ILanguageStoreShop;
}

export interface ILanguageStoreShop {
  products: IProduct[];
  titleOfert: string;
}

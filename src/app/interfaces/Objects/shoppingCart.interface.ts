export interface IShoppingCar {
  español: ILanguageShopping;
  english: ILanguageShopping;
}

export interface ILanguageShopping {
  header: IHeaderShopping;
  subTotal: ISubtotalShopping;
  buttonTitle: string;
}

export interface IHeaderShopping {
  title: string;
}

export interface ISubtotalShopping {
  title: string;
}

// export interface IButtonShopping{
//   title: string;
// }

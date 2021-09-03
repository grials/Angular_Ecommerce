export interface IHomeObject {
  español: IHeader;
  english: IHeader;
}

export interface IHeader {
  header: {
    title: string;
    subTitle: string;
    navBar: IItemNavBar[];
  };
  homeContent: IHomeContent;
  footer: IFooter;
}

export interface IHomeContent {
  publicity: IPublicity;
  carruselImg: ICarruselImg[];
  product: IProduct[];
  titleOfert: string;
  isSelected: IIsSelected;
}
// export interface IContactBar {
//   telf: string;
//   gmail: string;
//   adrress: string;
//   coin: string;
//   titleSingUp: string;
// }

// export interface ISearchBar {
//   title1: string;
//   categories: string[];
//   placeholder: string;
//   titleButton: string;
//   titlle2: string;
//   titlle3: string;
// }

export interface IFooter {
  title: string;
}

export interface IItemNavBar {
  title: string;
  path: string;
}

export interface IIsSelected {
  id: number;
  isOfert: boolean;
  title: string;
  price: number;
  maxContent: number;
}
export interface ICarruselImg {
  id: number;
  src: string;
}

export interface IProduct {
  id: number;
  src: string;
  isOfert: boolean;
  title: string;
  price: number;
  clickTitle: string;
  maxCant: number;
  description: IDescription[];
}

export interface IDescription {
  id: number;
  paragraph: string;
}
export interface IPublicity {
  title: string;
  content: string;
}

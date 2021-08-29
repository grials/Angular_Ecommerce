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

export interface IItemNavBar {
  title: string;
  path: string;
}

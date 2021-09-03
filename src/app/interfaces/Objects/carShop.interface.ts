export interface ICarShop {
  nameUser: string;
  car: IProductInCar[];
  totalShop: number;
}

export interface IProductInCar {
  id: number;
  src: string;
  title: string;
  price: number;
  cant: number;
}

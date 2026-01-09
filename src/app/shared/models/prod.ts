

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  description: string;
}

export interface Iresponse<T>{
  success : boolean;
  massage : {
     msg:string;
     data : T;
  }
}

import { Injectable } from '@angular/core';
import { IProduct, Iresponse } from '../models/prod';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 productsArr: IProduct[] = [
  {
    id: 'PRD-101',
    name: 'Apple iPhone 14',
    category: 'Electronics',
    price: 69999,
    rating: 4.6,
    stock: 15,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
    description: 'Latest iPhone with A15 Bionic chip'
  },
  {
    id: 'PRD-102',
    name: 'Samsung Galaxy S23',
    category: 'Electronics',
    price: 64999,
    rating: 4.5,
    stock: 20,
    image: 'https://m.media-amazon.com/images/I/71lD7eGdW-L._SL1500_.jpg',
    description: 'Flagship Samsung phone with AMOLED display'
  },
  {
    id: 'PRD-103',
    name: 'Sony WH-1000XM5',
    category: 'Accessories',
    price: 29999,
    rating: 4.8,
    stock: 10,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
    description: 'Noise cancelling wireless headphones'
  },
  {
    id: 'PRD-104',
    name: 'Dell Inspiron Laptop',
    category: 'Computers',
    price: 55999,
    rating: 4.4,
    stock: 8,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
    description: '15-inch laptop for work and study'
  },
  {
    id: 'PRD-105',
    name: 'Nike Running Shoes',
    category: 'Fashion',
    price: 4999,
    rating: 4.3,
    stock: 25,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
    description: 'Comfortable running shoes for daily use'
  },
  {
    id: 'PRD-106',
    name: 'Boat Smart Watch',
    category: 'Wearables',
    price: 2999,
    rating: 4.1,
    stock: 30,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg',
    description: 'Fitness smartwatch with heart-rate tracking'
  }
];


  constructor() { }

fetchAllProducts() : Observable<Iresponse<IProduct[]>>{
   return of({
    success : true,
    massage :{
      msg:`All Products feteched successfully...!!!`,
      data: this.productsArr
    }
   })
}


}

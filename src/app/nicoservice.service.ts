import { Injectable} from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { getClosureSafeProperty } from '@angular/core/src/util/property';

@Injectable({
  providedIn: 'root'
})
export class NicoserviceService {



constructor() {}

productsCollection = [
  {
    id: 1,
    name: 'Kurti',
    price: 499.99,
    currency: 'INR',
    image: 'assets/images/img16.jpg',
    image1: 'assets/images/img11.jpg'
  },
  {
    id: 2,
    name: 'Saree',
    price: 300.99,
    currency: 'INR',
    image: 'assets/images/img14.jpg',
    image1: 'assets/images/img14.jpg'
  },
  {
    id: 3,
    name: 'Saree',
    price: 239.99,
    currency: 'INR',
    image: 'assets/images/img15.jpg',
    image1: 'assets/images/img12.jpg'
  },
  {
    id: 4,
    name: 'Flare and Fit ',
    price: 899.99,
    currency: 'INR',
    image: 'assets/images/img17.jpg',
    image1: 'assets/images/img13.jpg'
  },
  {
    id: 5,
    name: 'Suit and Sets',
    price: 599.99,
    currency: 'INR',
    image: 'assets/images/img18.jpg',
    image1: 'assets/images/img4.jpg'
  },
  {
    id: 6,
    name: 'Anarkali kurti',
    price: 1000.99,
    currency: 'INR',
    image: 'assets/images/img19.jpg',
    image1: 'assets/images/img6.jpg'
  },
   {
    id: 7,
    name: 'Plazoo Pants',
    price: 760.99,
    currency: 'INR',
    image: 'assets/images/img20.jpg',
    image1: 'assets/images/img15.jpg'
  },
  {
    id: 8,
    name: 'Fit and Flare',
    price: 760.99,
    currency: 'INR',
    image: 'assets/images/img21.jpg',
    image1: 'assets/images/img15.jpg'
  },
  {
    id: 9,
    name: 'Indo Western',
    price: 1200.99,
    currency: 'INR',
    image: 'assets/images/img22.jpg',
    image1: 'assets/images/img15.jpg'
  }
];

  setData(params) {
    params = this.productsCollection;
  }
  getData() {
    return this.productsCollection;
  }

}


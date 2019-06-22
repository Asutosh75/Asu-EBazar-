import { Injectable } from '@angular/core';
import { Products } from '../product/products';
import { of, Observable, Subject } from 'rxjs';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProService {

  subject = new Subject<Product[]>();
    CartObj: Map< Product, number> = new Map<Product, number>();

    getproducts() {
      this.subject.next(Products);
    }

    getCategories(): Observable<string[]> {

      const cato: string[] = [];
      Products.map(p => {
        if (cato.indexOf (p.category) === -1) {
          cato.push(p.category);
        }
      });
      return of(cato);
    }

    searchProduct(search: string) {
      this.subject.next(Products.filter(p => p.category === search || p.productDiscription === search
       || p.price === +search || p.rateing === +search || p.quantity === +search));
    }

    SelectBoxData(data) {
      const array = Products.filter(arr => (data.select ? arr.category === data.select : true)
       && (data.Range ? arr.price <= data.Range : true));
        // console.log(array)
      this.subject.next(array);
   }
    // addData:any =[];
    AddCart(list) {
    this.CartObj.set(list,1);
    console.log(this.CartObj);
   }
}

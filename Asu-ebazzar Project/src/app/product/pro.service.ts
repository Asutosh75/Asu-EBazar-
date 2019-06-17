import { Injectable } from '@angular/core';
import {Products} from '../product/products';
import { of, Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProService {



    getproducts(): Observable<Product[]>{
      return of(Products);
    }

    getCategories():Observable<string[]>{

      let cato:string[]=[];
      Products.map(p => {
        if(cato.indexOf(p.category)==-1) cato.push(p.category)
      })
      return of(cato);
    }
}

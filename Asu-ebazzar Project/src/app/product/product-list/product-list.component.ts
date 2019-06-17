import { Component, ViewChild, OnInit } from '@angular/core';
import { Products } from '../product-list/../products';
import { Product } from 'src/app/model/product';
//import { MatSort } from '@angular/material';

import { ProService } from '../pro.service';



@Component({
  selector: 'app-product-list',
  providers: [ProService],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {


  pro: Product[];

  constructor(private proService: ProService) {

  }

  ngOnInit() {
    this.getProducts();

  }

  // sortDialog():void{
  //   const dialogRef =this.dialog.open(SortComponent,{width: '50%', height:'50%'});
  // };

  getProducts() {
    this.proService.getproducts()
      .subscribe(heroes => this.pro = heroes);

    console.log(this.pro);

  }

  sortAsc() {
    this.pro.sort((a: Product, b: Product) => {
      return a.price - b.price;
      console.log("inside sort method" + a + b)
    });

  }

  sortDec() {
    this.pro.sort((a: Product, b: Product) => {
      return b.price - a.price;
      
    });
  }
  RevAsc(){
    this.pro.sort((a:Product,b:Product) =>{
        return a.rateing-b.rateing;
    })
  }
  RevDec(){
    this.pro.sort((a:Product,b:Product) =>{
      return b.rateing-a.rateing;
  })
  }
  

}

import { Component, ViewChild, OnInit } from '@angular/core';
import { Products } from '../product-list/../products';
import { Product } from 'src/app/model/product';
// import { MatSort } from '@angular/material';


import { ProService } from '../pro.service';




@Component({
  selector: 'app-product-list',
  providers: [ProService],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {


  pro: Product[];
   term = '';
  item: any;

  constructor(private proService: ProService) {

  }

  ngOnInit() {
    this.proService.subject.subscribe(heroes =>  {
      console.log(heroes);
      this.pro = heroes;
    });
    this.getProducts();

  }

  // sortDialog():void{
  //   const dialogRef =this.dialog.open(SortComponent,{width: '50%', height:'50%'});
  // };

   getProducts() {
    // this.proService.subject.subscribe(heroes => this.pro = heroes);
    this.proService.getproducts();
  }

  searchProduct() {
    this.proService.searchProduct(this.term);
  }

  sortAsc() {
    this.pro.sort((a: Product, b: Product) => {
      return a.price - b.price;
     });
 }

  sortDec() {
    this.pro.sort((a: Product, b: Product) => {
      return b.price - a.price;
     });
  }

  RevAsc() {
    this.pro.sort((a: Product, b: Product) => {
        return a.rateing - b.rateing;
    });
  }

  RevDec() {
    this.pro.sort((a: Product, b: Product) => {
      return b.rateing - a.rateing;
  });

  }

  // ApplyFilter(val){
  //    this.pro.filter((ele)=>{
  //        let x = JSON.stringify(ele);
  //        console.log(x);
  //        if(x.toLowerCase().includes(val)){
  //         return x;
  //       }
  //    });
  // }
   AddtoCart(list) {
    this.proService.AddCart(list);
    this.item = this.proService.CartObj.size;
    }
  }
  
  
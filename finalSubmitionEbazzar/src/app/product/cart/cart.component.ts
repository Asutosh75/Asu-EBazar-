import { Component, OnInit } from '@angular/core';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;

  constructor(private proServices: ProService ) { }

  ngOnInit() {
  this.getCart();
  }
  getCart() {
    this.items = this.proServices.CartObj;
     // console.log(this.items);
  }
 }

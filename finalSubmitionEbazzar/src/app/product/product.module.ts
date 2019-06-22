import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ProductListComponent, FilterComponent, HomeComponent, SearchPipe, CartComponent],
  entryComponents: [],
  imports: [
    CommonModule, MaterialModule, MatDialogModule, FormsModule, ReactiveFormsModule, RouterModule
  ]
})
export class ProductModule { }

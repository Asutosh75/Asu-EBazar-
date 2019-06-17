import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MaterialModule} from '../material/material.module';

import {MatDialogModule} from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [ProductListComponent, FilterComponent, HomeComponent],
  entryComponents:[],
  imports: [
    CommonModule,MaterialModule,MatDialogModule
  ]
})
export class ProductModule { 

  
}

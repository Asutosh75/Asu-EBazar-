import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
// import {MatTableDataSource} from '@angular/material';


const mat = [ MatButtonModule,
           MatCardModule,
           MatFormFieldModule,
           MatInputModule,
           MatSelectModule,
           MatCheckboxModule,
           MatDialogModule,
           MatButtonToggleModule,
           MatSidenavModule,
           MatSliderModule,
           MatSortModule,
           MatTableModule,
           ];
@NgModule({
  imports: [ mat ],
  exports: [ mat ]
})
export class MaterialModule { }

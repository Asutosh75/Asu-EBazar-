import { Component, OnInit} from '@angular/core';
import { ProService } from '../pro.service';
import { FormGroup, FormControl } from '@angular/forms';
// import { Subject } from 'rxjs';
// import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
 })
export class FilterComponent implements OnInit {

    selectBox = new FormGroup ({
    select: new FormControl(''),
    Range: new FormControl(''),
  });
    constructor(private list: ProService ) {}

  listCatogories: string[];
    ngOnInit() {
    this.getCategories();
    this.selectBox.valueChanges.subscribe(retrive => this.list.SelectBoxData(retrive));
    }
   getCategories() {
       this.list.getCategories()
        .subscribe(data => this.listCatogories = data);
    }
}

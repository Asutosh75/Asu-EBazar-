import { Component} from '@angular/core';
import { ProService } from '../pro.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  
})
export class FilterComponent  {

 
  listCatogories: string[];
  ngOnInit(){
    this.getCategories();
  }
    constructor(private list:ProService){}

    getCategories(){
      this.list.getCategories()
        .subscribe(data => this.listCatogories = data);
    }
}

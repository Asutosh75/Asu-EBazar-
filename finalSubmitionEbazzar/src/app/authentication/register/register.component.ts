import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    pwd: new FormControl(''),
    repwd: new FormControl(''),
    number: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}

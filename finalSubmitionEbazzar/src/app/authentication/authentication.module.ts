import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from '../material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, WelcomeComponent],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  exports: []
  })
export class AuthenticationModule { }

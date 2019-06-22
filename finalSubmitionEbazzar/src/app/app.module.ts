import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProductModule } from './product/product.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FilterComponent } from './product/filter/filter.component';
import { HomeComponent } from './product/home/home.component';
import { WelcomeComponent } from './authentication/welcome/welcome.component';
import { CartComponent } from './product/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthenticationModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'productlist', component: ProductListComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'product', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: '', component: WelcomeComponent,
        pathMatch: 'full'
      },
      { path: 'home', component: WelcomeComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

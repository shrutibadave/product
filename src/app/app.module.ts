import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { ProductListComponent } from './module/product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

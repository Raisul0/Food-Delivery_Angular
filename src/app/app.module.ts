import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ResturantItemsComponent } from './pages/resturant-items/resturant-items.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    ResturantItemsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ResturantItemsComponent } from './pages/resturant-items/resturant-items.component';
import { CreateorderComponent } from './pages/createorder/createorder.component';

const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"foodCategory",
    component:CategoriesComponent
  },
  {
    path:"resturent-item",
    component:ResturantItemsComponent
  },
  {
    path:"create-order",
    component:CreateorderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

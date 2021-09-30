import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"home",
  component: HomeComponent
},
{
  path:"category/:name",
  component: CategoryComponent
},
{
  path: "products",
  component: ProductsComponent
},
{
  path: "products/products-details/:id",
  component: ProductDetailsComponent
},
{
  path: "category/:name/products-details/:id",
  component: ProductDetailsComponent
},
{
  path: "todo",
  component: TodoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

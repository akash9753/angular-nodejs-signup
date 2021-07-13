import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'',component:ProductComponent},
    {path:'product-list',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

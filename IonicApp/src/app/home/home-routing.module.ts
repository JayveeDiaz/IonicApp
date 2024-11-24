import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'products',
        loadChildren: () => import('../pages/products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/products/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'catch',
        loadChildren: () => import('../catch/catch.module').then( m => m.CatchPageModule)
      },
      {
        path:'',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

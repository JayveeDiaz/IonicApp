import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { CategoryItemModule } from 'src/app/component/category-item/category-item.module';
import { FoodCardModule } from 'src/app/component/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    CategoryItemModule,
    FoodCardModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  id:number;
  categories: Category [] = [];
  foods:Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories(){
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Cakes',
        image: 'assets/.png',
        active: false,
      },
      {
        id: 3,
        label: 'Pastries',
        image: 'assets/.png',
        active: false,
      },
      {
        id: 4,
        label: 'Drinks',
        image: 'assets/.png',
        active: false,
      },
    ];
  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id])
  }
}

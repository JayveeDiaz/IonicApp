import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[] {
        return[
            {
                id: 1,
                title: '1/4 Kilo Pork',
                price: 285,
                image: 'assets/beef.jpg',
                description: 'A classic Filipino bread features a rich, fluffy ube dough filled with melty cheese.'

            },
            {
                id: 2,
                title: '1/4 Kilo Beef',
                price: 385,
                image: 'assets/groundbeef.jpg',
                description: 'A Filipino soft bread roll stuffed with sweetened grated coconut meat.'
            },
            {
                id: 3,
                title: '1/4 Kilo Fish',
                price: 175,
                image: 'assets/fish.jpg',
                description: 'A soft textured-rolled version of mamon that has margarin and sugar filling'
            },
            {
                id: 4,
                title: '1/4 Kilo Shrimp',
                price: 195,
                image: 'assets/shrimp.jpg',
                description: 'A flaky crust traditionally filled with chicken sautéed with onions, peas, raisins, and potatoes.'
            },
            {
                id: 5,
                title: '1/4 Kilo Urchin',
                price: 299,
                image: 'assets/urchin.jpg',
                description: 'A Filipino soft, sweet dough pastry covered with butter and sugar then topped with lots of grated cheese.'
            },
            {
                id: 6,
                title: '1/4 Kilo Lobster',
                price: 445,
                image: 'assets/lobster.jpg',
                description: 'A Filipino purple rice cake steamed in bamboo tubes.'
            },
            {
                id: 7,
                title: '1/4 Kilo Clams',
                price: 199,
                image: 'assets/clams.jpg',
                description: ' A Philippine dessert and snack made with simple rice flour dough that is boiled and then coated in coconut and sesame seeds.'
            },
            {
                id: 8,
                title: '1/4 Kilo Fresh Tuna',
                price: 585,
                image: 'assets/tuna.jpg',
                description: 'A Filipino muffin or steamed rice cake in small bite-sized portions.'
            },
            {
                id: 9,
                title: '1/4 Kilo Snails',
                price: 99,
                image: 'assets/snails.jpg',
                description: 'Sometimes called, coconut pudding. A Filipino dessert made of coconut milk and corn.'
            },
            {
                id: 10,
                title: '1/4 Kilo Squid',
                price: 79,
                image: 'assets/squid.jpg',
                description: 'A traditional Filipino dessert that is soft rice cake paired with salty duck egg and cheese topping.'
            },
            {
                id: 11,
                title: '1/4 Kilo Oysters',
                price: 775,
                image: 'assets/oysters.jpg',
                description: 'Strawberry cake with fresh strawberry filling, icing, and glazed topping.'
            },
            {
                id: 12,
                title: '1/4 Kilo Crab',
                price: 555,
                image: 'assets/crab.jpg',
                description: 'Ube cake with fresh ube jam filling and frosting.'
            },
            {
                id: 13,
                title: '1/4 Kilo Sardines',
                price: 555,
                image: 'assets/sardines.jpg',
                description: 'Moist cake with a hint of vanilla, smothered with cream cheese frosting.'
            },
            {
                id: 14,
                title: '1/4 Kilo Eel',
                price: 775,
                image: 'assets/eel.jpg',
                description: 'Moist chocolate cake coated with rich chocolate ganache with fresh strawberry toppings.'
            },
            {
                id: 15,
                title: '1/4 Kilo Catfish',
                price: 570,
                image: 'assets/catfish.jpg',
                description: 'Perfectly baked cheesecakes.'
            },
            {
                id: 16,
                title: '1/4 Kilo Carp',
                price: 70,
                image: 'assets/carp.jpg',
                description: 'A hot Batangas’ Best Kapeng Barako.'
            },
            {
                id: 17,
                title: '1/4 Kilo Mussels',
                price: 75,
                image: 'assets/mussels.jpg',
                description: 'A milk mixed into Sagada’s Best espresso with ice. '
            },
            {
                id: 18,
                title: '1/4 Kilo Trout',
                price: 95,
                image: 'assets/trout.jpg',
                description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.'
            },
            {
                id: 19,
                title: '1/4 Kilo Salmon',
                price: 115,
                image: 'assets/salmon.jpg',
                description: 'Made with freshly brewed espresso, chocolate chips, and chocolate syrup.'
            },
            {
                id: 20,
                title: '1/4 Kilo Crayfish',
                price: 120,
                image: 'assets/crayfish.jpg',
                description: 'Made of frozen strawberries, frozen bananas, yogurt, and almond milk.'
            },
        ]
    }

    getFood(id: number):Food{
        return this.getFoods().find((food) => food.id === id);
    }
}
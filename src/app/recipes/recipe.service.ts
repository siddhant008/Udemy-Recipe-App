import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('McDonalds',
      'Meat with French fries',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkZUicMkpiqXecik4wO-_UddbrpdBI_CPeZJgDws5yaDV83FGR',
      [
        new Ingredient('Meat', 5),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Burger',
      'A very Big Burger!!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr12w46jsCKxktN9BXHUJIqCevRZAvPIVKNJkDoI4UpEdyEHkK',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe( id: number) {
    return this.recipes.slice()[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.shoppingListService.addIngredients(ingredients);
  }
}

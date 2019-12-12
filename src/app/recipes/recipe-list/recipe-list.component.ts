import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2019/08/Gambas-Al-Ajillo-Spanish-Garlic-Shrimp-Recipe-2-3-320x480.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2019/08/Gambas-Al-Ajillo-Spanish-Garlic-Shrimp-Recipe-2-3-320x480.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}

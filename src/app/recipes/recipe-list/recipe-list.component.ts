import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]= [];

  //@Output() selRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) { }

  showRecipe(selectedRecipe:Recipe){
    //console.log("Recipe selected "+ selectedRecipe)
    //this.selRecipe.emit(selectedRecipe);
    this.recipeService.selRecipe.emit(selectedRecipe);

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes
  }

}

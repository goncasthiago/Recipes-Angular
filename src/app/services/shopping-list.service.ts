import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients : Ingredient[] = [
    new Ingredient('Cenoura', 5),
    new Ingredient('Ovos', 4),
    new Ingredient('Leite', 1),
    new Ingredient('Farinha', 1),
  ];

  constructor() { }

  newIngredient(name:string, amount: number){
    this.ingredients.push(new Ingredient(name, amount));

  }
}

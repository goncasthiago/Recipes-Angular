import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Cenoura', 5),
    new Ingredient('Ovos', 4),
    new Ingredient('Leite', 1),
    new Ingredient('Farinha', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

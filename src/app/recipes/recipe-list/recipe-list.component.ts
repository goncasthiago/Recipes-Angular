import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]= [
    new Recipe('Bolo de Cenoura 1', 'Um bolo bem gostoso com cobertura de chocolate','https://conteudo.imguol.com.br/c/entretenimento/9c/2021/06/17/bolo-de-cenoura-1623937712804_v2_450x337.jpg'),
    new Recipe('Bolo de Cenoura 2', 'Um bolo bem gostoso com cobertura de chocolate','https://conteudo.imguol.com.br/c/entretenimento/9c/2021/06/17/bolo-de-cenoura-1623937712804_v2_450x337.jpg')
  
  ];
  @Output() selRecipe = new EventEmitter<Recipe>();

  constructor() { }

  showRecipe(selectedRecipe:Recipe){
    //console.log("Recipe selected "+ selectedRecipe)
    this.selRecipe.emit(selectedRecipe);

  }

  ngOnInit(): void {
  }

}

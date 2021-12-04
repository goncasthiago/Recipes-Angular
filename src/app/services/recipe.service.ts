import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes : Recipe[]= [
    new Recipe('Bolo de Cenoura 1', 'Um bolo bem gostoso com cobertura de chocolate','https://conteudo.imguol.com.br/c/entretenimento/9c/2021/06/17/bolo-de-cenoura-1623937712804_v2_450x337.jpg'),
    new Recipe('Bolo de Cenoura 2', 'Um bolo bem gostoso com cobertura de chocolate','https://conteudo.imguol.com.br/c/entretenimento/9c/2021/06/17/bolo-de-cenoura-1623937712804_v2_450x337.jpg')
  
  ];

  selRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IRecipes } from '../recipes/interfaces/recipes';

@Pipe({
  name: 'searchRecipes',
  standalone:true
})
export class SearchRecipesPipe implements PipeTransform {

  transform(category:IRecipes[],term:string): IRecipes[] {
    return category.filter((product)=>product.name.toLowerCase().includes(term.toLowerCase()));
  }

}

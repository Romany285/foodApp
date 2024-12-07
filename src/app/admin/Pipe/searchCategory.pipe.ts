import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../categories/interfaces/Interface';

@Pipe({
  name: 'searchCategory',
  standalone:true
})
export class SearchCategoryPipe implements PipeTransform {

  transform(category:ICategory[],term:string): ICategory[] {
    return category.filter((product)=>product.name.toLowerCase().includes(term.toLowerCase()));
  }

}

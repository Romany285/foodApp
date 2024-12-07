import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../users/interfaces/user';

@Pipe({
  name: 'searchUsers',
  standalone:true
})
export class SearchUsersPipe implements PipeTransform {

  transform(category:IUser[],term:string): IUser[] {
    return category.filter((product)=>product.userName.toLowerCase().includes(term.toLowerCase()));
  }

}

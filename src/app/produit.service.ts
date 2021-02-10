import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }
  /**
      * Search books by isbn
      * @param isbn
      */
     searchProduitById(id: number): Product{
      return  new Product();
  }
  
 /**
  * Search books by title
  * @param title
  */
  searchProduitByName(name: string): Product{
          return new Product();
  }
}

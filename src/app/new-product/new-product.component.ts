import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { NgForm } from "@angular/forms";
import { ProduitService } from  './../produit.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public types = [ 'id', 'name'];
  public id: number;
  public name: string;
  public displayType: string = 'Name'
  public headsTab = ['ID', 'NAME', 'MANAGER', 'START DATE'];
  public isNoResult: boolean = true;
  public isFormSubmitted: boolean = false;
  public actionButton: string = 'Save';
  public titleSaveOrUpdate: string = 'Add New Product Form';
  public messageModal: string;
  public displayMessageModal: boolean = false;
  
  
  public product = new Product();
  public searchProductResult: Product[] = [];
  
constructor(private productService: ProduitService) { }

  ngOnInit() {
  }
/**
  * Search books by title or by isbn
  * @param searchBookForm
  */
 searchBooksByType(searchProductForm){
  
  this.displayMessageModal = false;
  if(!searchProductForm.valid){
    this.buildMessageModal('Error in the form');
  }
  if(this.displayType === 'id'){
      this.searchProductResult = [];
      this.productService.searchProduitById(this.id);
  } else if(this.displayType === 'name'){
      this.searchProductResult = [];
      this.productService.searchProduitByName(this.name);
  }
  this.isFormSubmitted = searchProductForm.submitted;
}

/**
* Construit le message à afficher suite à une action utilisateur.
* @param msg 
*/
buildMessageModal(msg: string){
  this.messageModal = msg;
  this.displayMessageModal = true;
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Product {
  constructor(
    public productID: number,
    public productName: string,
    public salesQ1: number,
    public salesQ2: number,
    public salesQ3: number,
    public salesQ4: number
  ){

  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]

  message

   = [
     new Product(5068764589210, 'Yukon Gold Potatos', 120005, 184557,150624, 109383),
     new Product(5746890234585, 'Butte Russet Potatos', 24005, 284500,290657,350022),
     new Product(5449873501259, 'Red Cloud Potatos', 97800, 85300,87458,100000),
     new Product(5639814580025, 'Charlotte Potatos', 97800, 85300,87458,100000)
   ]

 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addProduct() {
    this.router.navigate(['todos',-1])
  }
}

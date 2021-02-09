import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:number
  product: Product

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}

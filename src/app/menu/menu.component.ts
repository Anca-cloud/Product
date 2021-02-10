import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './../hardcoded-authentication.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  ngOnInit() {
  }

  title = 'Products and Sales';
    
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { 
  }

  
 
  
  gotoSalesPage(){
      this.router.navigateByUrl('/product-list');
  }
  
  gotoNewProductPage(){
      this.router.navigateByUrl('/new-product');
  }

}

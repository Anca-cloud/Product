import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RouteGuardServiceService } from './route-guard-service.service';
import { LogoutComponent } from './logout/logout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [ { path: '', component: LoginComponent  },//canActivate, RouteGuardService
{ path: 'login', component: LoginComponent },
{ path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
{ path: 'todos', component: ProductListComponent, canActivate:[RouteGuardServiceService] },
{ path: 'logout', component: LogoutComponent, canActivate:[RouteGuardServiceService] },
{ path: 'todos/:id', component: ProductComponent, canActivate:[RouteGuardServiceService] },

{ path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




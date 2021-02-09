import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    ProductListComponent,
    NewProductComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    ProductComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

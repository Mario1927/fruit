import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitMainComponent } from './components/fruit-main/fruit-main.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FruitFamilyComponent } from './components/fruit-family/fruit-family.component';
import { FruitGenusComponent } from './components/fruit-genus/fruit-genus.component';
import { FruitOrderComponent } from './components/fruit-order/fruit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitMainComponent,
    FruitDetailComponent,
    FruitFamilyComponent,
    FruitGenusComponent,
    FruitOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

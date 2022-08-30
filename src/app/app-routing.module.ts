import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitFamilyComponent } from './components/fruit-family/fruit-family.component';
import { FruitMainComponent } from './components/fruit-main/fruit-main.component';
import { FruitGenusComponent } from './components/fruit-genus/fruit-genus.component';
import { FruitOrderComponent } from './components/fruit-order/fruit-order.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';

const routes: Routes = [
  { 
    path: 'order/:order', component: FruitOrderComponent
  },
  { 
    path: 'genus/:genus', component: FruitGenusComponent
  },
  { 
    path: 'family/:family', component: FruitFamilyComponent
  },
  {
    path: 'name/:name', component: FruitDetailComponent
  },
  {
    path: '', component: FruitMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

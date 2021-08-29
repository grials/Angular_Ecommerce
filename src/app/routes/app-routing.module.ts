import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Page404Component } from '../pages/page404/page404.component';
import { ShoppingCarComponent } from '../pages/shopping-car/shopping-car.component';
import { ThankYouComponent } from '../pages/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thanks', component: ThankYouComponent },
  { path: 'shopping', component: ShoppingCarComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { CheckOutComponent } from './../pages/check-out/check-out.component';
import { ViewProductComponent } from './../pages/view-product/view-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Page404Component } from '../pages/page404/page404.component';
import { ThankYouComponent } from '../pages/thank-you/thank-you.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { QuestionsComponent } from '../pages/questions/questions.component';
import { StoreComponent } from '../pages/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'store', component: StoreComponent },
  {
    path: 'products',
    children: [
      { path: 'product/:id', component: ViewProductComponent },
      { path: 'shopping', component: CheckOutComponent },
      { path: 'thanks', component: ThankYouComponent },
      { path: '**', component: Page404Component },
    ],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

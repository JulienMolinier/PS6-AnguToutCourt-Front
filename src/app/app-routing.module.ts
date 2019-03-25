import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReviewFormComponent} from './reviews/review-form';

const routes: Routes = [
  {path: 'review-form', component: ReviewFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

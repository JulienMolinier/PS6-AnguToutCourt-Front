import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from "./researchComponents/research/research.component";
import {HomeComponent} from "./home/home.component";
import {ReviewFormComponent} from './reviews/review-form';

const routes: Routes = [
  {path: 'review-form', component: ReviewFormComponent},
  {path: 'research', component: ResearchComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

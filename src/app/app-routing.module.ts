import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from './researchComponents/research/research.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReviewFormComponent} from './reviews/review-form';
import {ReviewListComponent} from './reviews/review-list';

const routes: Routes = [
  {path: 'reviewForm', component: ReviewFormComponent},
  {path: 'reviews' , component: ReviewListComponent},
  {path: 'research', component: ResearchComponent},
  {path: '', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

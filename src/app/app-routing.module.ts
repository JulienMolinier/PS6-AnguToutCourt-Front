import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from './research-components/research/research.component';
import {LoginComponent} from './log/login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReviewFormComponent} from './reviews/review-form';
import {UniversityComponent} from './universitycomponents/university/university.component';
import {ReviewListComponent} from './reviews/review-list';
import {CreateAccountComponent} from './create-account';
import {ExchangeProgramsComponent} from './exchange-programs/exchange-programs.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'review-form', component: ReviewFormComponent},
  {path: 'review-list', component: ReviewListComponent},
  {path: 'reviews', component: ReviewListComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'university/:id', component: UniversityComponent},
  {path: 'university', component: UniversityComponent},
  {path: 'exchange-programs', component: ExchangeProgramsComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

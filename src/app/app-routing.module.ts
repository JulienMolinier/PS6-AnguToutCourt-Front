import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from './research-components/research/research.component';
import {LoginComponent} from './log/login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReviewFormComponent} from './reviews/review-form';
import {UniversityComponent} from './universitycomponents/university/university.component';
import {ReviewListComponent} from './reviews/review-list';
import {ExchangeProgramsComponent} from './exchange-programs/exchange-programs.component';
import {LastReviewListComponent} from './reviews/last-review-list';

import {UniversityFormComponent} from './universitycomponents/university-form/university-form.component';
import {ReviewInfosComponent} from './reviews/review-infos';
import {RegisterComponent} from './log/register/register.component';
import {AdministrationComponent} from './administration/administration.component';
import {LoginGuardService} from '../services/guards/LoginGuardService';
import {LoginAdminGuardService} from '../services/guards/LoginAdminGuardService';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [LoginAdminGuardService]},
  {path: 'review-form', component: ReviewFormComponent, canActivate: [LoginGuardService]},
  {path: 'review-list', component: ReviewListComponent, canActivate: [LoginGuardService]},
  {path: 'last-reviews', component: LastReviewListComponent, canActivate: [LoginGuardService]},
  {path: 'reviews', component: ReviewListComponent, canActivate: [LoginGuardService]},
  {path: 'reviews/:id', component: ReviewInfosComponent, canActivate: [LoginGuardService]},
  {path: 'research', component: ResearchComponent, canActivate: [LoginGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuardService]},
  {path: 'administration', component: AdministrationComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'university/:id', component: UniversityComponent, canActivate: [LoginGuardService]},
  {path: 'university', component: UniversityComponent, canActivate: [LoginGuardService]},
  {path: 'exchange-programs', component: ExchangeProgramsComponent, canActivate: [LoginGuardService]},
  {path: 'university-form', component: UniversityFormComponent, canActivate: [LoginAdminGuardService]},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

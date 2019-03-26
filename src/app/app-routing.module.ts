import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from './research-components/research/research.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ReviewFormComponent} from './reviews/review-form';
import {LoginComponent} from './log/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'review-form', component: ReviewFormComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'home', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResearchComponent} from "./researchComponents/research/research.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ReviewFormComponent} from "./reviews/review-form";

const routes: Routes = [
  {path: 'review-form', component: ReviewFormComponent},
  {path: 'research', component: ResearchComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

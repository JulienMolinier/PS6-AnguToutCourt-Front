import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { ReviewComponent } from './reviews/review/review.component';
import { ReviewFormComponent } from './reviews/review-form/review-form.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import {HeaderComponent} from './header/header.component';
import {ResearchComponent} from './researchComponents/research/research.component';
import {ResearchResultListComponent} from './researchComponents/research-result-list/research-result-list.component';
import {UniversityCardComponent} from './researchComponents/university-card/university-card.component';
import {ResearchFilterComponent} from './researchComponents/research-filter/research-filter.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    ReviewComponent,
    ReviewFormComponent,
    ReviewListComponent,
    HeaderComponent,
    ResearchComponent,
    ResearchResultListComponent,
    UniversityCardComponent,
    ResearchFilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

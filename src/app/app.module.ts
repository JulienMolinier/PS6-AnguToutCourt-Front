import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {ReviewComponent} from './reviews/review';
import {ReviewFormComponent} from './reviews/review-form';
import {ReviewListComponent} from './reviews/review-list';
import {HeaderComponent} from './header/header.component';
import {ResearchComponent} from './research-components/research/research.component';
import {ResearchResultListComponent} from './research-components/research-result-list/research-result-list.component';
import {UniversityCardComponent} from './research-components/university-card/university-card.component';
import {ResearchFilterComponent} from './research-components/research-filter/research-filter.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UniversityMapComponent} from './universitycomponents/university-map/university-map.component';
import {UniversityDescriptionComponent} from './universitycomponents/university-description/university-description.component';
import {UniversityInfosComponent} from './universitycomponents/university-infos/university-infos.component';
import {UniversityComponent} from './universitycomponents/university/university.component';
import {LoginComponent} from './log/login/login.component';
import {RegisterComponent} from './log/register/register.component';
import {PasswordDirective} from './directives/password.directive';
import {CreateAccountComponent} from './create-account/create-account.component';
import {HttpClientModule} from '@angular/common/http';
import {UniversityService} from '../services/universityService';
import { LastReviewListComponent } from './last-review-list/last-review-list.component';

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
    HomeComponent,
    PageNotFoundComponent,
    UniversityCardComponent,
    UniversityComponent,
    UniversityInfosComponent,
    UniversityDescriptionComponent,
    LoginComponent,
    RegisterComponent,
    PasswordDirective,
    CreateAccountComponent,
    UniversityMapComponent,
    LastReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [UniversityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

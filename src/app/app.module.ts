import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {ReviewComponent} from './reviews/review';
import {ReviewFormComponent} from './reviews/review-form';
import {ReviewListComponent} from './reviews/review-list';
import {HeaderComponent} from './header/header.component';
import {ResearchComponent} from './research-components/research/research.component';
import {ResearchResultListComponent} from './research-components/research-result-list/research-result-list.component';
import {UniversityCardComponent} from './research-components/university-card/university-card.component';
import {HomeComponent} from './home/home.component';
import {AdministrationComponent} from './administration/administration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UniversityMapComponent} from './universitycomponents/university-map/university-map.component';
import {UniversityDescriptionComponent} from './universitycomponents/university-description/university-description.component';
import {UniversityInfosComponent} from './universitycomponents/university-infos/university-infos.component';
import {UniversityComponent} from './universitycomponents/university/university.component';
import {LoginComponent} from './log/login/login.component';
import {RegisterComponent} from './log/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UniversityService} from '../services/universityService';
import {UniversityHeaderComponent} from './universitycomponents/university-header/university-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExchangeProgramsComponent} from './exchange-programs/exchange-programs.component';
import {LastReviewListComponent} from './reviews/last-review-list';
import {ReviewService} from '../services/reviewService';
import {LoginService} from '../services/loginService';
import {NgSelectModule} from '@ng-select/ng-select';
import {SlideshowModule} from 'ng-simple-slideshow';
import {UniversityFormComponent} from './universitycomponents/university-form/university-form.component';
import {FooterComponent} from './footer/footer.component';
import {AuthenticationInterceptor} from '../services/AuthenticationInterceptor';
import {ProfileService} from '../services/profileService';
import {ReviewInfosComponent} from './reviews/review-infos';
import {LoginGuardService} from '../services/guards/LoginGuardService';
import {LoginAdminGuardService} from '../services/guards/LoginAdminGuardService';
import {MyDialogComponent} from './alerte/my-dialog/my-dialog.component';
import {AlertFormRegisterComponent} from './alerte/alert-form-register/alert-form-register.component';
import {AlertFormUniversityComponent} from './alerte/alert-form-university/alert-form-university.component';
import {ReviewPostAlertComponent} from './alerte/review-post-alert';

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
    HomeComponent,
    PageNotFoundComponent,
    UniversityCardComponent,
    UniversityComponent,
    UniversityInfosComponent,
    UniversityDescriptionComponent,
    LoginComponent,
    RegisterComponent,
    ExchangeProgramsComponent,
    UniversityMapComponent,
    UniversityHeaderComponent,
    UniversityMapComponent,
    LastReviewListComponent,
    UniversityFormComponent,
    LastReviewListComponent,
    FooterComponent,
    ReviewInfosComponent,
    MyDialogComponent,
    AdministrationComponent,
    AlertFormRegisterComponent,
    AlertFormUniversityComponent,
    ReviewPostAlertComponent
  ],
  imports: [
    SlideshowModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [UniversityService, ReviewService, ProfileService, LoginGuardService, LoginAdminGuardService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent, AlertFormUniversityComponent, AlertFormRegisterComponent, ReviewPostAlertComponent],

})
export class AppModule {
}

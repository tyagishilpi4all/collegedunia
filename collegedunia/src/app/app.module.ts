import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllRatingComponent } from './components/home/all-rating/all-rating.component';
import { BtnFieldComponent } from './components/home/btn-field/btn-field.component';
import { StylesComponent } from './components/home/styles/styles.component';
import { RatingsComponent } from './components/home/ratings/ratings.component';
import { BlueCarComponent } from './components/home/blue-car/blue-car.component';
import { ProgressbarComponent } from './components/home/ratings/progressbar/progressbar.component';
import { MeterComponent } from './components/home/ratings/meter/meter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllRatingComponent,
    BtnFieldComponent,
    StylesComponent,
    RatingsComponent,
    BlueCarComponent,
    ProgressbarComponent,
    MeterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

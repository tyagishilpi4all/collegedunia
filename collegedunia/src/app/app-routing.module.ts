import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StylesComponent } from './components/home/styles/styles.component';
import {BlueCarComponent} from './components/home/blue-car/blue-car.component'

const routes: Routes = [
 {
   path:'',
   component:StylesComponent
 },
 {
   path:'bluecar',
   component:BlueCarComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

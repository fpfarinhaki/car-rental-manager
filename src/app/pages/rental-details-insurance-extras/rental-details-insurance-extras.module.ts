import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetailsInsuranceExtrasPage } from './rental-details-insurance-extras.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetailsInsuranceExtrasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetailsInsuranceExtrasPage]
})
export class RentalDetailsInsuranceExtrasPageModule {}

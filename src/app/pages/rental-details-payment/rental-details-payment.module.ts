import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RentalDetailsPaymentPage } from './rental-details-payment.page';

const routes: Routes = [
  {
    path: '',
    component: RentalDetailsPaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RentalDetailsPaymentPage]
})
export class RentalDetailsPaymentPageModule {}

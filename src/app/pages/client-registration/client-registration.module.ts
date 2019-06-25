import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientRegistrationPage } from './client-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ClientRegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes), 
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ClientRegistrationPage]
})
export class ClientRegistrationPageModule {}

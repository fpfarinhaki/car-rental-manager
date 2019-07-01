import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddClientModalPage } from './add-client-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddClientModalPage
  }
];

@NgModule({
  declarations: [AddClientModalPage],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class AddClientModalPageModule {}

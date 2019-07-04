import { Component } from '@angular/core';
import { AddRentalModalPage } from '../modal/add-rental-modal/add-rental-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rentals',
  templateUrl: 'rentals.page.html',
  styleUrls: ['rentals.page.scss']
})
export class RentalsPage {

  constructor(private modalController: ModalController) {}


  async addRental() {
    const modal = await this.modalController.create({
      component: AddRentalModalPage
    });
    return await modal.present();
  }
}

import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ModalController } from '@ionic/angular';
import { AddCarModalPage } from '../../modal/add-car-modal/add-car-modal.page';

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.page.html',
  styleUrls: ['cars.page.scss']
})
export class CarsPage {

  cars = [];
  constructor(private carService: CarService,
    private modalController: ModalController) {
    this.cars = carService.getCars();
  }

  async addCar() {
    const modal = await this.modalController.create({
      component: AddCarModalPage
    });

    return await modal.present();
  }
  
}



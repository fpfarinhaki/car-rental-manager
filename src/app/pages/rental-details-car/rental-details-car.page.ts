import { Component, OnInit } from '@angular/core';
import { Car, CarCategory, CarService } from 'src/app/services/car.service';
import { ModalController } from '@ionic/angular';
import { AvailableCarsModalPage } from 'src/app/modal/available-cars-modal/available-cars-modal.page';
import { RentalService, CarAcessories } from 'src/app/services/rental.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rental-details-car',
  templateUrl: './rental-details-car.page.html',
  styleUrls: ['./rental-details-car.page.scss'],
})
export class RentalDetailsCarPage implements OnInit {

  selectedCar: Car;
  selectedAccessories: CarAcessories[];
  availableCars = [];
  availableCategoryA = [];
  availableCategoryB = [];
  availableCategoryC = [];

  constructor(private carService: CarService,
              private rentalService: RentalService,
              private modalController: ModalController) { 
    this.availableCars = this.carService.getCars().filter(car => !car.client);
    this.availableCategoryA = this.availableCars.filter((car) => car.category === CarCategory.A);
    this.availableCategoryB = this.availableCars.filter((car) => car.category === CarCategory.B);
    this.availableCategoryC = this.availableCars.filter((car) => car.category === CarCategory.C);
  }

  ngOnInit() {  
  }

  ionViewDidLeave() {
    this.rentalService.withCar(this.selectedCar, this.selectedAccessories);
    // console.log(this.rentalService.currentRental());
  }

  async openAvailableCars(selectedCategory?) {
    const modal = await this.modalController.create({
      component: AvailableCarsModalPage,
      componentProps: {category: selectedCategory}
    });
    modal.onDidDismiss().then(data => {
      this.selectedCar = data.data;
    });
    return await modal.present();
  }

  availableAcessories() {
    return Object.values(CarAcessories);
  }

  removeAcessory(itemIndex) {
    this.selectedAccessories.splice(itemIndex, 1);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CarService, Car, CarCategory } from 'src/app/services/car.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-available-cars-modal',
  templateUrl: './available-cars-modal.page.html',
  styleUrls: ['./available-cars-modal.page.scss'],
})
export class AvailableCarsModalPage implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('category') category: string;
  availableCars: Car[] = [];
  selectedCar: Car;

  constructor(private carService: CarService, 
              private modalController: ModalController) { }

  ngOnInit() {
    if (!this.category) {
      this.availableCars = this.carService.getCars();
    } else {
      this.availableCars = this.carService.getCars()
            .filter((car) => car.category === CarCategory[this.category]);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  selectCar(car) {
    this.selectedCar = car;
    this.modalController.dismiss(this.selectedCar);
  }

  // searchByRegistration(event) {
  //   if (event.srcElement.value === '') {
  //     this.availableCars = this.carService.searchBy()
  //   } else {
  //     this.availableCars = this.carService.searchBy(event.srcElement.value, CarCategory[this.category]);
  //   }
  // }
}

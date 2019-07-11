import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CarService, Car, FuelQuantity } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car-modal',
  templateUrl: './add-car-modal.page.html',
  styleUrls: ['./add-car-modal.page.scss'],
})
export class AddCarModalPage implements OnInit {

  carForm: FormGroup;
  colors = ["Blanco", "Plata", "Rojo", "Negro"];
  categories = ["A", "B", "C", "D"];
  fuelTypes = ["Gasolina", "Diesel", "Eléctrico"];

  ngOnInit() {
  }
  
  constructor(private modalController: ModalController,
    private carService: CarService) { 
    this.carForm = new FormGroup({
      modelName : new FormControl('', Validators.required),
      registration: new FormControl(''),
      color: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      fuelType: new FormControl('', Validators.required),
      image: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.carForm.value);
    const value = this.carForm.value;
    let car: Car = {
      modelName: value['modelName'],
      registration: value['registration'],
      color: value['color'],
      category: value['category'],
      fuelType: value['fuelType'], 
      currentKm: 0,
      fuelIndicator: FuelQuantity.HALF
    }
    console.log(car);
    this.carService.addCar(car);
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}

import { Injectable } from '@angular/core';
import { Client } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<Car> = [];

  constructor() { 
    this.cars.push({
      modelName: "Seat Ibiza",
      registration: "5014JXN",
      category: CarCategory.B,
      fuelType: "Gasolina",
      fuelIndicator: FuelQuantity.FULL,
      color: "Blanco",
      image: "http://bay2car.com/img/2016-SEAT-Ibiza-1-0-EcoTSI-SE-3dr-Petrol-white-Manual-262911897981/2.jpg"
    },
    {
      modelName: "Seat Leon",
      registration: "YXZ7890",
      category: CarCategory.C,
      fuelType: "Diesel",
      fuelIndicator: FuelQuantity.THREE_QUARTS,
      color: "Plata",
      image: "https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/lGgAAOSwHnFVmPIV/$_86.JPG"
    },
    {
      modelName: "Fiat Panda",
      registration: "FGH190881",
      category: CarCategory.A,
      fuelType: "Diesel",
      fuelIndicator: FuelQuantity.THREE_QUARTS,
      color: "Plata",
      image: "https://i.ebayimg.com/00/s/NjAwWDgwMA==/z/lGgAAOSwHnFVmPIV/$_86.JPG"
    });
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  getCars(): Array<Car> {
    return this.cars;
  }

  searchBy(registration: string, category: CarCategory) {
    let categoryFiltered = [];
    categoryFiltered = this.cars.filter((car) => car.category === category);
    return categoryFiltered.filter((car) => car.registration.toLowerCase().startsWith(registration.toLowerCase()));
  }

}

export class Car {

  public modelName;
  public color;
  public registration: string;
  public category: CarCategory;
  public fuelType;
  public fuelIndicator: FuelQuantity;
  public image?;
  public client?: Client;
}

export enum FuelQuantity {
  'FULL' = 100, THREE_QUARTS = 75, HALF = 50, ONE_QUART =  25, EMPTY = 0
}

export enum CarCategory {
  A, B, C, D
}

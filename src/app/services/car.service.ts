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
      category: "B",
      fuelType: "Gasolina",
      color: "Blanco",
      image: "http://bay2car.com/img/2016-SEAT-Ibiza-1-0-EcoTSI-SE-3dr-Petrol-white-Manual-262911897981/2.jpg"
    },
    {
      modelName: "Seat Leon",
      registration: "YXZ7890",
      category: "C",
      fuelType: "Diesel",
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

}

export class Car {

  public modelName;
  public color;
  public registration; 
  public category;
  public fuelType;
  public image?;
  public client?: Client
}
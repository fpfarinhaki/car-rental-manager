import { Injectable } from '@angular/core';
import { Client } from './client.service';
import { Car } from './car.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: Rental[] = [];
  private _rental: Rental;
  
  constructor() {}

  getRentals() {
    return this.rentals;
  }

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }

  aRental() {
    this._rental = new Rental();
    this._rental.contractNumber = '123534353';
  }

  withClient(client: Client) {
    this._rental.client = client;
  }

  withCar(car: Car, accessories?: CarAcessories[]) {
    this._rental.car = car;
    this._rental.accessories = accessories;
  }

  withPickupDate(pickupDate: Date) {
    this._rental.pickupDate = pickupDate;
  }

  withReturnDate(returnDate: Date) {
    this._rental.returnDate = returnDate;
  }

  public currentRental() {
    return this._rental;
  }

  public cleanCurrentRental() {
    this._rental = new Rental();
  }

}

export class Rental {
  contractNumber?: string;
  client?: Client;
  car?: Car;
  pickupDate?: Date;
  returnDate?: Date;
  pickupLocation?: string;
  accessories?: CarAcessories[];
  insurance?: boolean;
  under23?: boolean;
}

export enum CarAcessories {
  GPS = "GPS", BABY_SEAT = "Sila Niño", 
  CHILD_SEAT = "Sila", WIFI = "Wifi"
}

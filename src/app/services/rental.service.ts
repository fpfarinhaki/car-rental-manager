import { Injectable } from '@angular/core';
import { Client } from './client.service';
import { Car } from './car.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: Rental[] = []; 
  constructor() { }

  getRentals() {
    return this.rentals;
  }

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }
}

export class Rental {
  contractNumber: string;
  client: Client;
  car: Car;
  pickupDate: Date;
  returnDate: Date;
  pickupLocation?: string;
}

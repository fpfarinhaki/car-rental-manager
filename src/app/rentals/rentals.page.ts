import { Component } from '@angular/core';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: 'rentals.page.html',
  styleUrls: ['rentals.page.scss']
})
export class RentalsPage {

  rentals = [];
  constructor(private rentalService: RentalService) {
    this.rentalService.cleanCurrentRental();
    this.rentals = rentalService.getRentals();
  }
  
}

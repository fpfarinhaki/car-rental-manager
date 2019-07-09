import { Component, OnInit } from '@angular/core';
import { RentalService, Rental } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details-payment',
  templateUrl: './rental-details-payment.page.html',
  styleUrls: ['./rental-details-payment.page.scss'],
})
export class RentalDetailsPaymentPage implements OnInit {

  currentRental: Rental;

  constructor(private rentalService: RentalService) { 
  }

  ngOnInit() {
    this.currentRental = this.rentalService.currentRental();
  }

  dateDifference() {
    let diff = (this.currentRental.returnDate.valueOf() - this.currentRental.pickupDate.valueOf()) / (24 * 3600 * 1000);
    return Math.ceil(diff);
}

}

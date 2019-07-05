import { Component, OnInit } from '@angular/core';
import { Rental, RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details-payment',
  templateUrl: './rental-details-payment.page.html',
  styleUrls: ['./rental-details-payment.page.scss'],
})
export class RentalDetailsPaymentPage implements OnInit {

  rental: Rental;
  constructor(private rentalService: RentalService) { 
    this.rental = this.rentalService.currentRental();
    console.log(this.rental);
  }

  ngOnInit() {
  }

}

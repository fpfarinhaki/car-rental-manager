import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  now: string;
  pickupDate: Date;
  returnDate: Date;
  minDate: string = new Date().toISOString();

  constructor(private rentalService: RentalService) {
  }

  ionViewDidLeave() {
    this.rentalService.withPickupDate(this.pickupDate);
    this.rentalService.withReturnDate(this.returnDate);
  }

  ngOnInit() {
    this.pickupDate = new Date();
    this.now = new Date().toISOString();
    this.minDate = new Date().toISOString();
  }

  changePickupDate(event) {
    this.pickupDate = event.srcElement.value;
  }

  changeReturnDate(event) {
    this.returnDate = event.srcElement.value;
  }

}

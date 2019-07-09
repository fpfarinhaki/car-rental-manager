import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  now: string;
  pickupDate: string;
  returnDate: string;
  minDate: string = new Date().toISOString();

  constructor(private rentalService: RentalService) {
  }

  ionViewWillLeave() {
    console.log(this.pickupDate);
    console.log(this.returnDate);
    this.rentalService.withPickupDate(new Date(this.pickupDate));
    this.rentalService.withReturnDate(new Date(this.returnDate));
  }

  ngOnInit() {
    this.pickupDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
  }

}

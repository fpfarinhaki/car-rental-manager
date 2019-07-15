import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const provider = new OpenStreetMapProvider({
  params: {
    countrycodes: 'es'
  }
});

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  now: string;
  pickupDate: string;
  pickupLocation: string;
  returnDate: string;
  returnLocation: string;
  minDate: string = new Date().toISOString();
  autocompleteItems = [];
  
  constructor(private rentalService: RentalService) {
  }

  ionViewWillLeave() {
    console.log(this.pickupDate);
    console.log(this.returnDate);
    this.rentalService.withPickupDate(new Date(this.pickupDate));
    this.rentalService.withReturnDate(new Date(this.returnDate));
    this.rentalService.withPickupLocation(this.pickupLocation);
  }

  ngOnInit() {
    this.pickupDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
  }

  searchAddress(event) {
    let keyword = event.srcElement.value;
    if (keyword == '') {
      this.autocompleteItems = [];
      return;
    } else if  (keyword.length > 6) {
      provider.search({
        query: keyword
      }).then(result => this.autocompleteItems = result);
    }
  }

  chooseAddress(address) {
    console.log(address);
    this.autocompleteItems = [];
    this.pickupLocation = address.label;
  }

}

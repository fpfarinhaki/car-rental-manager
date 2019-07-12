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
  returnDate: string;
  minDate: string = new Date().toISOString();
  autocompleteItems = [];
  
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

  updateSearch(event) {
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

}

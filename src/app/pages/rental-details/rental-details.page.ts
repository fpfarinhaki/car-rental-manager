import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  now = new Date().toString();
  minDate: string = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}

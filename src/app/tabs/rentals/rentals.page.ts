import { Component, OnInit, OnDestroy } from '@angular/core';
import { RentalService, Rental } from '../../services/rental.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rentals',
  templateUrl: 'rentals.page.html',
  styleUrls: ['rentals.page.scss']
})
export class RentalsPage implements OnInit, OnDestroy {
  
  private unsubscribe$ = new Subject<void>();

  rentals: Rental[] = [];
  constructor(private rentalService: RentalService) {
  }
 
  ngOnInit() {
    this.rentalService.getRentals()
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(result => this.rentals = result);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  cleanRental() {
    this.rentalService.cleanCurrentRental();
  }
}

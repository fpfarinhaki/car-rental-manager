import { Component, OnInit } from '@angular/core';
import { RentalService, Rental } from 'src/app/services/rental.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rental-details-payment',
  templateUrl: './rental-details-payment.page.html',
  styleUrls: ['./rental-details-payment.page.scss'],
})
export class RentalDetailsPaymentPage implements OnInit {

  currentRental: Rental;
  showCarDetails: boolean = false;
  showClientDetails: boolean = false;
  showDateDetails: boolean = false;

  constructor(private rentalService: RentalService,
              private toastController: ToastController) { 
  }

  ngOnInit() {
    this.currentRental = this.rentalService.currentRental();
    // console.log(this.currentRental);
  }

  dateDifference() {
    let diff = (this.currentRental.returnDate.valueOf() - this.currentRental.pickupDate.valueOf()) / (24 * 3600 * 1000);
    return Math.ceil(diff);
  } 

  carDetails() {
    this.showCarDetails = !this.showCarDetails;
  }

  clientDetails() {
    this.showClientDetails = !this.showClientDetails;
  }
  
  dateDetails() {
    this.showDateDetails = !this.showDateDetails;
  }

  confirmRental() {
    this.rentalService.confirmRental();
    this.toastController.create({
      message: "Alquiler registrado con sucesso",
      duration: 650,
      translucent: false, 
      animated: true,
      position: "top"
    }).then(toast => {
        setTimeout(() => {
          toast.present();
        }, 650); 
      });
  }
}

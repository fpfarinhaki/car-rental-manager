import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from 'src/app/services/client.service';
import { ModalController } from '@ionic/angular';
import { AvailableCarsModalPage } from '../available-cars-modal/available-cars-modal.page';
import { Car, CarService, CarCategory } from 'src/app/services/car.service';
import { AddClientModalPage } from '../add-client-modal/add-client-modal.page';
import { Rental, RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-add-rental-modal',
  templateUrl: './add-rental-modal.page.html',
  styleUrls: ['./add-rental-modal.page.scss'],
})
export class AddRentalModalPage implements OnInit {

  clients: Client[] = [];
  clientName = '';
  clientNotFound = false;
  selectedClient: Client;
  searchingClient = false;

  rental: Rental;

  constructor(private clientService: ClientService,
              private rentalService: RentalService,
              private modalController: ModalController) {
  }

  ngOnInit() {
  }

  searchClient(event) {
    const keyword = event.srcElement.value;
    this.clientName = keyword;
    this.searchingClient = true;
    if (!keyword) return;
    if (keyword.length <= 2) {
      this.clearForm();
      return;
    } else {
      this.clientService.getClients(event.srcElement.value)
        .subscribe(result => {
          if (result.length === 0) {
            this.clientNotFound = true;
            this.searchingClient = false;
          } else {
            this.clientNotFound = false;
          }
          this.clients = result;
        });
    }
  }

  private clearForm() {
    this.clients = [];
    this.clientNotFound = false;
    this.selectedClient = null;
  }

  addClient() {
    this.modalController.create({
      component: AddClientModalPage,
      animated: true,
      componentProps: {clientName: this.clientName}
    }).then(modal => {
      modal.present();
      modal.onDidDismiss().then(dismissData => {
        if (dismissData.data) {
          this.selectedClient = dismissData.data;
          this.clientName = this.selectedClient.name;
          this.clientNotFound = false;
        }
      });
    });
  }

  selectClient(client: Client) {
    this.selectedClient = client;
    this.clientName = '';
    this.clients = [];
    this.clientNotFound = false;
    this.searchingClient = false;
    // console.log(this.client);
  }
}

import { Component } from '@angular/core';
import { ClientService, Client } from '../services/client.service';
import { AddClientModalPage } from '../modal/add-client-modal/add-client-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage {

  clients = [];

  constructor(private clientService: ClientService,
    private modalController: ModalController) {
    this.clientService.getClients('')
      .subscribe((result) => this.clients = result);
    console.log(this.clients);
  }

  async addClient() {
    const modal = await this.modalController.create({
      component: AddClientModalPage
    });

    return await modal.present();
  }
}

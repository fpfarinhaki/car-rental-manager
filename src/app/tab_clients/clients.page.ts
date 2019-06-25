import { Component } from '@angular/core';
import { ClientService, Client } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.page.html',
  styleUrls: ['clients.page.scss']
})
export class ClientsPage {

  clients = [];

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }

}

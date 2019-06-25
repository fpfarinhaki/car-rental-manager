import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients = [];

  constructor() { }

  getClients() { return this.clients; }

  addClient(client: Client) { this.clients.push(client); }

}

export class Client {
  public name: string;
  public surname_1: string;
  public surname_2: string;
  public paymentType: PaymentType;

  constructor(name: string, paymentType: PaymentType) {
    this.name = name;
    this.paymentType = paymentType;
  }
}

export enum PaymentType {
  CARD, CASH, CHECK
}

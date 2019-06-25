import { Component, OnInit } from '@angular/core';
import { ClientService, Client, PaymentType } from 'src/app/services/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.page.html',
  styleUrls: ['./client-registration.page.scss'],
})
export class ClientRegistrationPage implements OnInit {
  clientForm: FormGroup;

  validationMessages = {
    'name': [{type: 'required', message: 'Nombre es necesario.'}],
    'surname_1': [{type: 'required', message: 'Primero apelido es necesario.'}],
    'payment': [{type: 'required', message: 'Una forma de pago es necesaria.'}]
  };

  constructor(private clientService: ClientService) {
    this.clientForm = new FormGroup({
      name : new FormControl('', Validators.required),
      surname_1: new FormControl('', Validators.required),
      surname_2: new FormControl(''),
      payment: new FormControl('Seleciona el pagamento', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.clientForm.value);
    const value = this.clientForm.value;
    const client = new Client(value['name'], value['payment']);
    console.log(client);
    this.clientService.addClient(client);
  }

}

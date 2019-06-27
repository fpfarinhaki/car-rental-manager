import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { Client, ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.page.html',
  styleUrls: ['./add-client-modal.page.scss'],
})
export class AddClientModalPage implements OnInit {

  clientForm: FormGroup;
  valid: boolean;

  constructor(private modalController: ModalController,
              private clientService: ClientService,
              private formBuilder: FormBuilder) {
  }

  onFormStatusChange() {
    this.clientForm.statusChanges
      .subscribe((event) => {
        console.log(event);
      });
  }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name : new FormControl('', {updateOn: 'change', validators: Validators.required}),
      surname_1: new FormControl('', Validators.required),
      surname_2: new FormControl(''),
      payment: new FormControl('Seleciona el pagamento', Validators.required)
    });

    this.onFormStatusChange();
  }

  onSubmit() {
    console.log(this.clientForm.value);
    const value = this.clientForm.value;
    const client = new Client(value.name, value.payment);
    console.log(client);
    this.clientService.addClient(client);
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}

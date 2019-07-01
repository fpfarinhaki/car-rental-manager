import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.page.html',
  styleUrls: ['./add-client-modal.page.scss'],
})
export class AddClientModalPage implements OnInit {
  countries = [];
  clients = [];

  clientForm: FormGroup;

  constructor(private modalController: ModalController,
              private clientService: ClientService,
              private formBuilder: FormBuilder, 
              private countryService: CountryService) {           
  }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name : new FormControl('', Validators.required),
      idNumber: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    }, {updateOn: 'change'});
    console.log(this.clientForm.value);
  }

  onSubmit() {
    console.log(this.clientForm.value);
    const value = this.clientForm.value;
    // const client: Client = {};
    // console.log(client);
    // this.clientService.addClient(client);
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  takeIdPhoto() {
    console.log("Open action sheet with options: Take photo(document scanner?!) / Select photo");
    console.log("attach photo to client registration");
    console.log("Change camera icon to Checked Icon");
  }

  searchCountry(event) {
    // console.log(event.srcElement.value);
    if (event.srcElement.value == '') {
      this.countries = [];
    } else {
      if (event.srcElement.value.length > 1) {
        this.countryService.getResults(event.srcElement.value)
          .subscribe(result => this.countries = result);
      }
    }
    console.log(this.countries);
  }

  searchClient(event) {
    // console.log(event.srcElement.value);
    if (event.srcElement.value == '') {
      this.clients = [];
    } else {
      if (event.srcElement.value.length > 1) {
        this.clientService.getClients(event.srcElement.value)
          .subscribe(result => this.clients = result);
      }
    }
    // console.log(this.clients);
  }

  selectCountry(selectedCountry) {
    this.clientForm.patchValue({country: selectedCountry.name});
    //Empty countries list to close virtual scroll
    this.countries = [];
  }

  selectClient(selectedClient) {
    this.clientForm.patchValue({name: selectedClient.name});
    this.clientForm.patchValue({idNumber: selectedClient.idNumber});
    this.clientForm.patchValue({country: selectedClient.idCountry});
    //Empty countries list to close virtual scroll
    this.clients = [];
  }
}

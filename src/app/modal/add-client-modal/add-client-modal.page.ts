import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { Client, ClientService } from 'src/app/services/client.service';
import { CountryService } from 'src/app/services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.page.html',
  styleUrls: ['./add-client-modal.page.scss'],
})
export class AddClientModalPage implements OnInit {
 

  clientForm: FormGroup;
  selectedCountry = 'País';
  countries: {}

  constructor(private modalController: ModalController,
              private clientService: ClientService,
              private formBuilder: FormBuilder, 
              private countryService: CountryService) {
                 
  }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name : new FormControl('', Validators.required),
      idNumber: new FormControl('', Validators.required),
      idType: new FormControl(''),
      idExpirationDate: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      address: new FormControl(''),
      phone: new FormControl('')
    }, {updateOn: 'change'});
    this.countryService.getCountries()
      .subscribe((countries: any[]) => {
        this.countries = countries.map(country => country['name']);
      });      
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

  takeIdPhoto() {
    console.log("Open action sheet with options: Take photo(document scanner?!) / Select photo");
    console.log("attach photo to client registration");
    console.log("Change camera icon to Checked Icon");
  }


}

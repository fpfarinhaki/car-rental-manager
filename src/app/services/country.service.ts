import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerColumnOption } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}

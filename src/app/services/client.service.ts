import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private clients = [];

  constructor() {
    this.clients.push(
      {
        name: "Felipe Farinhaki",
        idNumber: "FF12345",
        idType: IdType.PASSAPORTE,
        idExpirationDate: "22/01/2020",
        idCountry: "Brazil",
        driverLicenseNumber: "9990001",
        driverLicenseExpirationDate: "22/01/2020",
        driverLicenseCountry: "Poland",
      },
      {
        name: "Daiana Dias",
        idNumber: "DF987345",
        idType: IdType.OTHER,
        idExpirationDate: "09/09/2020",
        idCountry: "España",
        driverLicenseNumber: "0008987",
        driverLicenseExpirationDate: "20/12/2021",
        driverLicenseCountry: "Brasil",
      },
      {
        name: "Fernando Urso",
        idNumber: "8763412",
        idType: IdType.DNI,
        idExpirationDate: "12/12/2022",
        idCountry: "España",
        driverLicenseNumber: "12309987",
        driverLicenseExpirationDate: "14/06/2025",
        driverLicenseCountry: "España",
      });
   }

   getClients(keyword: string): Observable<any[]> {
    let observable:Observable<any>;

    if (this.clients.length === 0) {
      return;
    } else {
      observable = of(this.clients);
    }

    return observable.pipe(
      map(
        (result) => {
          return result.filter(
            (item) => {
              return item.name.toLowerCase().startsWith(
                  keyword.toLowerCase()
              );
            }
          );
        }
      )
    );
  }

  addClient(client: Client) { this.clients.push(client); }

}

export class Client {
  public name: string;
  public idNumber: string; 
  public idType: IdType;
  public idExpirationDate: Date;
  public idCountry: string;
  public driverLicenseNumber: string;
  public driverLicenseExpirationDate: Date;
  public driverLicenseCountry: string;
  public currentRental?: any;
  public previousRentals?: any[];
}

export enum IdType {
  DNI = "D.N.I", PASSAPORTE = "Passaporte", OTHER = "Otro"
}


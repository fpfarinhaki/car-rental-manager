import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries:any[] = [];

  constructor(private http:HttpClient) {
  }

  getResults(keyword: string): Observable<any[]> {
    let observable:Observable<any>;

    if (this.countries.length === 0) {
      observable = this.http.get('https://restcountries.eu/rest/v2/all');
    } else {
      observable = of(this.countries);
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

}

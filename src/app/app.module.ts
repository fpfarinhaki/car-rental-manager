import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddClientModalPageModule } from './modal/add-client-modal/add-client-modal.module';
import { AddCarModalPageModule } from './modal/add-car-modal/add-car-modal.module';
import { HttpClientModule } from '@angular/common/http'
import { AddRentalModalPageModule } from './modal/add-rental-modal/add-rental-modal.module';
import { AvailableCarsModalPageModule } from './modal/available-cars-modal/available-cars-modal.module';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    AddClientModalPageModule, AddCarModalPageModule, AddRentalModalPageModule,
    AvailableCarsModalPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    OpenStreetMapProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

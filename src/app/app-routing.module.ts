import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'rentals', loadChildren: './rentals/rentals.module#RentalsPageModule' },
  { path: 'add-rental-modal', loadChildren: './modal/add-rental-modal/add-rental-modal.module#AddRentalModalPageModule' },
  { path: 'available-cars-modal', loadChildren: './modal/available-cars-modal/available-cars-modal.module#AvailableCarsModalPageModule' },
  { path: 'rental-details', loadChildren: './pages/rental-details/rental-details.module#RentalDetailsPageModule' },
  { path: 'rental-details-payment', loadChildren: './pages/rental-details-payment/rental-details-payment.module#RentalDetailsPaymentPageModule' },  { path: 'rental-details-car', loadChildren: './pages/rental-details-car/rental-details-car.module#RentalDetailsCarPageModule' },
  { path: 'rental-details-insurance-extras', loadChildren: './pages/rental-details-insurance-extras/rental-details-insurance-extras.module#RentalDetailsInsuranceExtrasPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

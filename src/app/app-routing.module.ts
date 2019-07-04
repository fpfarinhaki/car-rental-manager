import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-rental-modal', loadChildren: './modal/add-rental-modal/add-rental-modal.module#AddRentalModalPageModule' },
  { path: 'available-cars-modal', loadChildren: './modal/available-cars-modal/available-cars-modal.module#AvailableCarsModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

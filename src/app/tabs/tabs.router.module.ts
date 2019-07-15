import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'rentals',
        children: [
          {
            path: '',
            loadChildren: './rentals/rentals.module#RentalsPageModule'
          }
        ]
      },
      {
        path: 'cars',
        children: [
          {
            path: '',
            loadChildren: './cars/cars.module#CarsPageModule'
          }
        ]
      },
      {
        path: 'clients',
        children: [
          {
            path: '',
            loadChildren: './clients/clients.module#ClientsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/rentals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rentals',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../location/location.module').then(
                (m) => m.LocationPageModule
              ),
          },
        ],
      },
      {
        path: 'camp',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../camp-details/camp-details.module').then(
                (m) => m.CampDetailsPageModule
              ),
          },
        ],
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my-details/my-details.module').then(
                (m) => m.MyDetailsPageModule
              ),
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/tabs/location', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

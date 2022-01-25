import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampDetailsPage } from './camp-details.page';

const routes: Routes = [
  {
    path: '',
    component: CampDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampDetailsPageRoutingModule {}

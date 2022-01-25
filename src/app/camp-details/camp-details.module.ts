import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampDetailsPageRoutingModule } from './camp-details-routing.module';

import { CampDetailsPage } from './camp-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampDetailsPageRoutingModule
  ],
  declarations: [CampDetailsPage]
})
export class CampDetailsPageModule {}

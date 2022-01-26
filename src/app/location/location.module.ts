import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { GoogleMapComponent } from '../components/google-map/google-map.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LocationPageRoutingModule],
  declarations: [LocationPage, GoogleMapComponent],
})
export class LocationPageModule {}

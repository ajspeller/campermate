import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild(GoogleMapComponent, { static: true }) map: GoogleMapComponent;
  private location: Location;
  constructor(
    private platform: Platform,
    private dataService: DataService,
    alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async confirmSetLocation(): Promise<void> {}
  async setLocation(): Promise<void> {}
  takeMeHome(): void {}
}

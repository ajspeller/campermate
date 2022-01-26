import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();
    SplashScreen.hide().catch((err) => console.warn(err));
    StatusBar.setBackgroundColor({ color: '#54a0ff' }).catch((err) =>
      console.warn(err)
    );
  }
}

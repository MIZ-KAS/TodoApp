import { Component } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'ionic-todoapp';
  description = 'ionic-todoapp-demo';

  itemValue = '';
  items : Observable<any[]>;

  constructor(
    public angularFire: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

const authObserver = this.afAuth.authState.subscribe(user => {
  if (user) {
      this.rootPage = HomePage;
      authObserver.unsubscribe();
  } else {
      this.rootPage = LoginPage;
      authObserver.unsubscribe();
  }
});
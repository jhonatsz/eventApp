import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import firebase from 'firebase';

// Application Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCvz77f4ku1Om3PGonVS1yAk4WJHJlIsTo",
      authDomain: "eventapp-80190.firebaseapp.com",
      databaseURL: "https://eventapp-80190.firebaseio.com",
      storageBucket: "eventapp-80190.appspot.com",
      messagingSenderId: "40961420250"
    };
    firebase.initializeApp(config);

    // initialize auth observer
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

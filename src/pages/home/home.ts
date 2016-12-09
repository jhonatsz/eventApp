import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { AuthData } from '../../providers/auth-data';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthData) {
    this.navCtrl = navCtrl;
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToCreate(){
    this.navCtrl.push(EventCreatePage);
  }

  goToList(){
    this.navCtrl.push(EventListPage);
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}

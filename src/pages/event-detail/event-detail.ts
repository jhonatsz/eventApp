import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';

/*
  Generated class for the EventDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  currentEvent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventData: EventData) {
    this.navParams = navParams;

    this.eventData.getEventDetail(this.navParams.get('eventId'))
      .on('value', (snapshot) => {
        this.currentEvent = snapshot.val();
    });

  }

  ionViewDidLoad() {
    console.log('Hello EventDetailPage Page');
  }

}

import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the EventData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventData {

  public currentUser: any;
  public eventList: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');

  }

  createEvent(eventName: string, eventDate: string,
    eventPrice: number, eventCost: number): any {
    return this.eventList.push({
      name: eventName,
      date: eventDate,
      price: eventPrice,
      cost: eventCost
    }).then( newEvent => {
      this.eventList.child(newEvent.key).child('id').set(newEvent.key);
    });
  }

  getEventList(): any {
    return this.eventList;
  }

  getEventDetail(eventId): any {
    return this.eventList.child(eventId);
  }
}

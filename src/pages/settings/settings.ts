/**
 * This file represents a component of settings
 * File path - '../../../../src/pages/settings/settings'
 */


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settings: any = {
    showMe: {
      man: true,
      women: false
    },
    lookingFor: {
      date: true,
      romance: true,
      sex: false,
      marriage: false
    },
    radius: {
      distance: 23,
      noRadius: false
    },
    ageRange: {
      limits: {
        lower: 37,
        upper: 68
      },
      noAgeLimit: false
    },
    receiveMessagesFrom: 'MATCHES',
    showMeOnSrce: true,
    appSettings: {
      newMatches: true,
      messages: true,
      messageLikes: true,
      superLikes: true
    }
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  //Update
  update(){
    console.log(this.settings);
  }

  // Logout
  logout() {
    this.navCtrl.setRoot('SignInPage');
  }
  /**
   * This function dismiss the page
   */
  dismiss() {
    this.navCtrl.pop();
  }

}

import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
/**
 * This file represents a component of settings
 * File path - '../../../../src/pages/settings/settings'
 */


import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit {

  ngOnInit() {
    this.userService.getUserSettings()
      .then(data => {
        if(data !== undefined)
        {
          this.settings = data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
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
    public viewCtrl: ViewController,
    private authService: AuthService,
    private userService: UserService) {
  }

  //Update
  update() {
    console.log(this.settings);
    this.userService.updateUserSettings(this.settings)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Logout
  logout() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot('SignInPage');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /**
   * This function dismiss the page
   */
  dismiss() {
    this.navCtrl.pop();
  }

}

/**
 * This file represents a component of SignIn Page
 * File path - '../../../../src/pages/authentication/sign-in/sign-in'
 */


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) { }

  /**
   * --------------------------------------------------------------
   * Go To Profile Page
   * --------------------------------------------------------------
   * @method    goToProfile
   */
  goToProfile() {
    this.navCtrl.setRoot('HomePage');
  }

  /**
   * --------------------------------------------------------------
   * Go To Sign Up Page
   * --------------------------------------------------------------
   * @method    goToSignUpPage
   */
  goToSignUpPage() {
    this.navCtrl.setRoot('SignUpPage');
  }

  /**
   * --------------------------------------------------------------
   * Go To Landing Page
   * --------------------------------------------------------------
   * @method    goToLandingPage
   */
  goToLandingPage() {
    this.navCtrl.setRoot('LandingPage');
  }
}

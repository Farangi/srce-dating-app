/**
 * This file represents a component of SignUp Page
 * File path - '../../../../src/pages/authentication/sign-up/sign-up'
 */


import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  @ViewChild(Slides) slides: Slides;
  gender: any = 'female';

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

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
   * Go To Sign In Page
   * --------------------------------------------------------------
   * @method    goToSignInPage
   */
  goToSignInPage() {
    this.navCtrl.setRoot('SignInPage');
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

  /**
   * --------------------------------------------------------------
   * Go To Second Slider
   * --------------------------------------------------------------
   * @method    step2
   */
  step2() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  /**
   * --------------------------------------------------------------
   * Go To Third Slider
   * --------------------------------------------------------------
   * @method    step3
   */
  step3() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
}

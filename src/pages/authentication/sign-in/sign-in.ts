/**
 * This file represents a component of SignIn Page
 * File path - '../../../../src/pages/authentication/sign-in/sign-in'
 */


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  loginForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    fb: FormBuilder,
    private auth: AuthService) { 
      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
    }

  /**
   * --------------------------------------------------------------
   * Go To Profile Page
   * --------------------------------------------------------------
   * @method    goToProfile
   */
  goToProfile() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot('HomePage'),
        error => console.log(error)
      );
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        () => this.navCtrl.setRoot('HomePage'),
        error => console.log(error.message)
      );
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

/**
 * This file represents a component of Home Page
 * File path - '../../../../src/pages/home/home'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.tab1 = 'ProfilePage';
    this.tab2 = 'SwipePage';
    this.tab3 = 'MatchesPage';
  }
}


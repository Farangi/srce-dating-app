/** 
 * This file represents a component of Profile
 * File path - '../../../../src/pages/profile/profile'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  sliderData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dataProvider: DataProvider,
    public modalCtrl: ModalController) {
  }

  /** Do any initialization */
  ngOnInit() {
    this.getSliderData();
  }

  /**
   * --------------------------------------------------------------
   * Slider Data
   * --------------------------------------------------------------
   * @method    getSliderData
   */
  getSliderData() {
    this.sliderData = this.dataProvider.profileSlider();
  }

  /**
   * --------------------------------------------------------------
   * Open Edit Profile Page
   * --------------------------------------------------------------
   * @method    openEditProfilePage
   */
  openEditProfilePage() {
    
  }

  /**
   * --------------------------------------------------------------
   * Open Settings Page
   * --------------------------------------------------------------
   * @method    openSettingsPage
   */
  openSettingsPage() {
    
  }
}



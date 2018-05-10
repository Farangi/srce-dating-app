/** 
 * This file represents a component of Profile
 * File path - '../../../../src/pages/profile/profile'
 */

import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  _imageViewerCtrl: ImageViewerController;
  sliderData: any;

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataProvider: DataProvider,
    public modalCtrl: ModalController,
    imageViewerCtrl: ImageViewerController) {

      this._imageViewerCtrl = imageViewerCtrl;
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
    this.app.getRootNav().push('EditProfilePage');
  }

   /**
   * --------------------------------------------------------------
   * Open Photo Viewer Modal
   * --------------------------------------------------------------
   * @method    presentImage
   */
  presentImage(img) {
    const imageViewer = this._imageViewerCtrl.create(img);
    imageViewer.present();
  }

  /**
   * --------------------------------------------------------------
   * Open Settings Page
   * --------------------------------------------------------------
   * @method    openSettingsPage
   */
  openSettingsPage() {
    this.app.getRootNav().push('SettingsPage');
  }
}



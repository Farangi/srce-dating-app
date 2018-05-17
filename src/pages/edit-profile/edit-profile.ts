import { UserService } from './../../services/user.service';
/**
 * This file represents a component of Edit Profile
 * File path - '../../../../src/pages/edit-profile/edit-profile'
 */

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage implements OnInit {
  _imageViewerCtrl: ImageViewerController;

  public base64Image: string;
  showAllImg: Boolean = false;
  interests: any = [
    {name: 'Cricket', value: 'CRICKET'},
    {name: 'Fishing', value: 'FISHING'},
    {name: 'Reading', value: 'READING'},
    {name: 'Swimming', value: 'SWIMMING'},
    {name: 'Soccer', value: 'SOCCER'},
    {name: 'Pollitics', value: 'POLLITICS'},
    {name: 'Painting', value: 'PAINTING'},
    {name: 'Designing', value: 'DESIGNING'},
    {name: 'Sketching', value: 'SKETCHING'},
    {name: 'Tennis', value: 'Tennis'},
    {name: 'Driving', value: 'Driving'},
    {name: 'Books', value: 'BOOKS'},
    {name: 'Cards', value: 'CARDS'},
    {name: 'Movies', value: 'MOVIES'}
  ];
  img0: any = 'assets/imgs/13.jpg';
  img1: any = this.img0;
  img2: any = 'assets/imgs/14.jpg';
  img3: any;
  img4: any;
  img5: any;

  ngOnInit() {
    this.userService.getUserData()
      .then(data => {
        if(data !== undefined)
        {
          this.profile.personal.gender = data.gender;
          this.profile.personal.birthday = data.birthday;
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.userService.getUserProfile()
      .then(data => {
        if(data !== undefined)
        {
          this.profile = data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  profile: any = {
    showAllImg: false,
    personal: {
      fullName: '',
      birthday: '',
      gender: 'MAN',
      about: ''
    },
    location: {
      country: '',
      city: ''
    },
    job:{
      jobTitle: ''
    },
    body: {
      height: {
        ft: 0,
        in: 0
      },
      weight: 0,
      eyes: '',
      hair: ''
    },
    extras: {
      tattoo: 'NO',
      piercing: 'NO'
    },
    interests: [],
    lookingFor:'',
    control: {
      hideAge: false,
      invisibleDistance: false
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    imageViewerCtrl: ImageViewerController,
    private userService: UserService) {

      this._imageViewerCtrl = imageViewerCtrl;
  }

  /**
   * --------------------------------------------------------------
   * Open Gallery & Select Photo
   * --------------------------------------------------------------
   * @method    takePhoto
   * @param     num    Image Number
   */
  takePhoto(num) {
    // Camera Options
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500
    }
    this.camera.getPicture(options).then((base64String: string) => {
      this.base64Image = "data:image/*;base64," + base64String;

      if (num == 1) {
        this.img1 = this.base64Image;
      }
      if (num == 2) {
        this.img2 = this.base64Image;
      }
      if (num == 3) {
        this.img3 = this.base64Image;
      }
      if (num == 4) {
        this.img4 = this.base64Image;
      }
      if (num == 5) {
        this.img5 = this.base64Image;
      }
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * This function selects the main photo
   */
  selectPhoto(num) {
    if (num == 1) {
      if(this.img1 != null || undefined || ''){
        this.img0 = this.img1;
      }
    }
    if (num == 2) {
      if(this.img2 != null || undefined || ''){
        this.img0 = this.img2;
      }
    }
    if (num == 3) {
      if(this.img3 != null || undefined || ''){
        this.img0 = this.img3;
      }
    }
    if (num == 4) {
      if(this.img4 != null || undefined || ''){
        this.img0 = this.img4;
      }
    }
    if (num == 5) {
      if(this.img5 != null || undefined || ''){
        this.img0 = this.img5;
      }
    }
  }

  /**
   * This function helps to show photo in full modal
   */
  showPhoto(elImg, num) {
    if (num == 0) {
       this.presentImage(elImg, this.img0);
    }
    if (num == 1) {
      if(this.img1 != null || undefined || ''){
        this.presentImage(elImg, this.img1);
      }
    }
    if (num == 2) {
      if(this.img2 != null || undefined || ''){
        this.presentImage(elImg, this.img2);
      }
    }
    if (num == 3) {
      if(this.img3 != null || undefined || ''){
        this.presentImage(elImg, this.img3);
      }
    }
    if (num == 4) {
      if(this.img4 != null || undefined || ''){
        this.presentImage(elImg, this.img4);
      }
    }
    if (num == 5) {
      if(this.img5 != null || undefined || ''){
        this.presentImage(elImg, this.img5);
      }
    }
  }

  /**
   * This function shows photo in full modal
   */
  presentImage(elImg, img) {
    const imageViewer = this._imageViewerCtrl.create(elImg, {fullResImage: img});
    imageViewer.present();
  }

  //Update
  update(){
    console.log(this.profile);
    this.userService.updateUserProfile(this.profile)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
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

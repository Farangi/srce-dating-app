import { UserService } from './../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AdMobFree } from '@ionic-native/admob-free';
import { Camera } from '@ionic-native/camera';

import { SelectSearchableModule } from 'ionic-select-searchable';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { DataProvider } from '../providers/data/data';
import { GiphyProvider } from '../providers/giphy/giphy';

import { ChatProvider } from '../providers/chat/chat';
import { AdmobProvider } from '../providers/admob/admob';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from '../services/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SelectSearchableModule,
    IonicImageViewerModule,
    HttpModule,
    SwingModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdMobFree,
    DataProvider,
    GiphyProvider,
    ChatProvider,
    AdmobProvider,
    AuthService,
    UserService
  ]
})
export class AppModule { }

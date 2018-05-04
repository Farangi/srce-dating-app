import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwingModule } from 'angular2-swing';
import { SwipePage } from './swipe';

@NgModule({
  declarations: [
    SwipePage,
  ],
  imports: [
    SwingModule,
    IonicPageModule.forChild(SwipePage),
  ],
})
export class SwipePageModule { }

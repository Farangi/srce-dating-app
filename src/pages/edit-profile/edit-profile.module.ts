import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from './edit-profile';
import { PipesModule } from '../../pipes/pipes.module';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    EditProfilePage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(EditProfilePage),
    SelectSearchableModule,
  ],
})
export class EditProfilePageModule { }

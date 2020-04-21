import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './merchant-routing.module';
import {FileUploadModule} from 'ng2-file-upload';

import {MerchantComponent} from './merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    FolderPageRoutingModule
  ],
  declarations: [MerchantComponent]
})
export class FolderPageModule {
}

import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
 
})
export class HomePageModule {}

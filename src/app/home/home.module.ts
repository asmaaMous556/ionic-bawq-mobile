import { DevicesComponent } from './control-tabs/tab-components/devices/devices/devices.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';



import { HomePageRoutingModule } from './home-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule,BrowserModule],
  declarations: [HomePage, SideMenuComponent,DevicesComponent],
})
export class HomePageModule {}

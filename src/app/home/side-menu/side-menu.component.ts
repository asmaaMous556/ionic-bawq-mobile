/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DevicesService } from 'src/app/devices/devices.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(
    private menuController: MenuController,
    private _devices: DevicesService
  ) {}

  ngOnInit() {
    // eslint-disable-next-line no-underscore-dangle
    this._devices.clientGetManyDevices().subscribe((res) => {
      console.log(res);
    });
  }
}

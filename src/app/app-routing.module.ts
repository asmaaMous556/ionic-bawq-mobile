import { MapComponent } from './home/control-tabs/tab-components/map/map.component';
import { CommandsComponent } from './home/control-tabs/tab-components/commands/commands/commands.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './home/control-tabs/tab-components/devices/devices/devices.component';
import { MeComponent } from './home/control-tabs/tab-components/me/me/me.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'devices',
    component:DevicesComponent
  },
  {
    path:'me',
    component:MeComponent
  }
  ,{
    path:'commands',
    component:CommandsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

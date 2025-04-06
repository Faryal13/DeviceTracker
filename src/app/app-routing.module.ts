import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTrackerPageComponent } from './components/device-tracker-page/device-tracker-page.component';
//Routing file to goto to different menus
const routes: Routes = [
  { path: '', redirectTo: 'device-tracker', pathMatch: 'full' },
  { path: 'device-tracker', component: DeviceTrackerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

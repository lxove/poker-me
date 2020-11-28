import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokerComponent } from './poker/poker.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SettingsComponent,
    path: 'settings',
  },
  {
    component: PokerComponent,
    path: 'poker',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

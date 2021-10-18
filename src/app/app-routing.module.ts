import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'characters', component:CharactersComponent},
  {path: 'locations', component:LocationsComponent},
  {path: 'about-us', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

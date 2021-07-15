import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"teams",component:TeamsComponent},
  {path:"countries",component:CountriesComponent},
  {path:"players",component:PlayersComponent},
  {path:"booktickets",component:BookticketsComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

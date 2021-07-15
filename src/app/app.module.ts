import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { CardsComponent } from './cards/cards.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VenuesComponent } from './venues/venues.component';
import { FooterComponent } from './footer/footer.component';
import { CarousalComponent } from './carousal/carousal.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { RouterModule } from '@angular/router';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { CountriesComponent } from './countries/countries.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LatestvideosComponent } from './latestvideos/latestvideos.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    CardsComponent,
    SearchPipe,
    HomeComponent,
    VenuesComponent,
    FooterComponent,
    CarousalComponent,
    LatestnewsComponent,
    BookticketsComponent,
    CountriesComponent,
    PagenotfoundComponent,
    LatestvideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

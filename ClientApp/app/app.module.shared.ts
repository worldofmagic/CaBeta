import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { GameListComponent } from './components/gamelist/gamelist.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GameDetailComponent} from './components/gamedetail/gamedetail.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        GameListComponent,
        WeatherComponent,
        GameDetailComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'gamelist', component: GameListComponent },
            { path: 'weather', component: WeatherComponent },
            { path: 'gamedetail', component: WeatherComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],

};

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameListService} from './services/gamelist.service';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { GameListComponent } from './components/gamelist/gamelist.component';
import { WeatherComponent } from './components/weather/weather.component';
import { GameDetailEditComponent } from './components/gamedetailedit/gamedetailedit.component';
import { GameDetailViewComponent } from './components/gamedetailview/gamedetailview.component';

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
        GameDetailEditComponent,
        GameDetailViewComponent
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
            { path: "item/edit/:id", component: GameDetailEditComponent },
            { path: "item/view/:id", component: GameDetailViewComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],

};

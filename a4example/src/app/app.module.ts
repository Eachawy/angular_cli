import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

// Services
import { DataService } from './services/data.service';
// Router
import { Route } from '@angular/router/src/config';
// google map
import { AgmCoreModule } from '@agm/core';
// Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './templete/header/header.component';
import { FooterComponent } from './templete/footer/footer.component';
import { MenuComponent } from './templete/menu/menu.component';
import { MapComponent } from './components/map/map.component';

const appRoutes : Routes = [
  { path:'User',component: UserComponent},
  {path:'about',component: AboutComponent},
  { path: 'map', component: MapComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfvVTUL0KjvSlqPUCZt_QL_C_zz4OYfVY'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

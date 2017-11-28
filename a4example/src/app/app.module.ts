import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';


import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { Route } from '@angular/router/src/config';
import { HeaderComponent } from './templete/header/header.component';
import { FooterComponent } from './templete/footer/footer.component';
import { MenuComponent } from './templete/menu/menu.component';

const appRoutes : Routes = [
  { path:'User',component: UserComponent},
  {path:'about',component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

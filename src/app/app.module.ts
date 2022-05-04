import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];
// const routes: Routes = [
//   { path: '', redirectTo: '/profile', pathMatch: 'full' },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'about', component: AboutComponent }
//   // { path: 'hero', component: HeroComponent }
// ];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
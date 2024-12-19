import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClimbingRoutesComponent } from './climbing-routes/climbing-routes.component';
import { ClimbingRoutesListComponent } from './climbing-routes/climbing-routes-list/climbing-routes-list.component';
import { ClimbingRoutesDetailComponent } from './climbing-routes/climbing-routes-detail/climbing-routes-detail.component';
import { ClimbingRoutesItemComponent } from './climbing-routes/climbing-routes-item/climbing-routes-item.component';
import { ClimbingRoutesEditComponent } from './climbing-routes/climbing-routes-edit/climbing-routes-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClimbingRoutesComponent,
    ClimbingRoutesListComponent,
    ClimbingRoutesDetailComponent,
    ClimbingRoutesItemComponent,
    ClimbingRoutesEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

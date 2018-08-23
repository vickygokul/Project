import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './ui/header-component.component';
import { FooterComponent } from './ui/footer.component';



import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RegistersModule } from './registers/registers.module';
import { MatchModule } from './match/match.module';
import { BookingComponent } from './booking/booking.component';
import { BookingModule } from './booking/booking.module';



const routes: Routes=[
  
  {path: "",redirectTo: "/home", pathMatch: "full"},
  {path: "**",component: PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent
  
  ],
  imports: [
    BrowserModule, NgbModule, NgbCarouselModule,
    RouterModule.forRoot(routes),RegistersModule,MatchModule,
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

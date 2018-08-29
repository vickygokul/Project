import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './ui/header-component.component';
import { FooterComponent } from './ui/footer.component';
import{HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RegistersModule } from './registers/registers.module';
import { MatchModule } from './match/match.module';
import { BookingModule } from './booking/booking.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import { PaymentStatusComponent } from './booking/payment-status.component';
import { PaymentCancelComponent } from './booking/payment-cancel.component';
import { AdminLoginComponent } from './admin/admin-login.component';
import { ManageMatchComponent } from './admin/manage-match.component';
import { ManageMatchDetailComponent } from './admin/manage-match-detail.component';





const routes: Routes=[
  {path:"admin",component:AdminLoginComponent},
  {path:"manage",component:ManageMatchComponent},
  {path: "",redirectTo: "/home", pathMatch: "full"},
  {path: "**",component: PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PaymentStatusComponent,
    PaymentCancelComponent,
    AdminLoginComponent,
    ManageMatchComponent,
    ManageMatchDetailComponent
  
  ],
  imports: [
    BrowserModule, NgbModule, NgbCarouselModule,FormsModule,
    RegistersModule,MatchModule,HttpModule,
    BookingModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

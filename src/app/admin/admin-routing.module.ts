import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageMatchComponent } from './manage-match.component';
import { ManageMatchDetailComponent } from './manage-match-detail.component';
import { LoginComponent } from '../registers/login.component';
import { AdminLoginComponent } from './admin-login.component';
import { AuthenticationGuard } from '../services/authentication.guard';

const routes: Routes = [
  {
    path:"admin",
    canActivate:[AuthenticationGuard],
    children:[
  
  {path:"manage",component:ManageMatchComponent},
  {path:"manage/:id",component:ManageMatchDetailComponent},
  {path:"",component:AdminLoginComponent}
]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

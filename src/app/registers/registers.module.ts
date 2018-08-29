import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RegistersRoutingModule } from './registers-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    CommonModule,
    RegistersRoutingModule,FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports:[LoginComponent]
})
export class RegistersModule { }

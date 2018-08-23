import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { CarouselComponent } from './carousel.component';
import { MatchComponent } from './match.component';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule
  ],
  declarations: [CarouselComponent,MatchComponent],
  exports:[MatchComponent,CarouselComponent]
})
export class MatchModule { }

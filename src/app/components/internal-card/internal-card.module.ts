import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternalCardComponent} from "./internal-card.component";



@NgModule({
  declarations: [
    InternalCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InternalCardComponent
  ]
})
export class InternalCardModule { }

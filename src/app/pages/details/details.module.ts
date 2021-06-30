import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import {DetailsComponent} from './details.component';
import {BoardModule} from '../../components/board/board.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    DetailsRoutingModule,
    BoardModule
  ]
})
export class DetailsModule { }

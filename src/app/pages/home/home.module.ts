import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './home.component';
import {BoardModule} from '../../components/board/board.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BoardModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

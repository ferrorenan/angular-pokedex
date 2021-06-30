import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card.component';
import {PokedexPanelModule} from '../pokedex-panel/pokedex-panel.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CardComponent
  ],
    imports: [
        CommonModule,
        PokedexPanelModule,
        RouterModule
    ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }

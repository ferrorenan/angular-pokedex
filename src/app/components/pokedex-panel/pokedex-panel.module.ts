import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokedexPanelComponent} from './pokedex-panel.component';



@NgModule({
  declarations: [
    PokedexPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokedexPanelComponent
  ]
})
export class PokedexPanelModule { }

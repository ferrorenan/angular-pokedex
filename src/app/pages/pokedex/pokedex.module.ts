import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import {PokedexComponent} from './pokedex.component';
import {CardModule} from '../../components/card/card.module';
import {BoardModule} from '../../components/board/board.module';
import {SliderPokemonsModule} from "../../components/slider-pokemons/slider-pokemons.module";

@NgModule({
  declarations: [
    PokedexComponent,
  ],
    imports: [
        CommonModule,
        PokedexRoutingModule,
        CardModule,
        BoardModule,
        SliderPokemonsModule
    ]
})
export class PokedexModule { }

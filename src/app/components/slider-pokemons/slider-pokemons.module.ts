import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderPokemonsComponent} from "./slider-pokemons.component";
import {SwiperModule} from "swiper/angular";
import {InternalCardModule} from "../internal-card/internal-card.module";



@NgModule({
  declarations: [
    SliderPokemonsComponent
  ],
    imports: [
        CommonModule,
        SwiperModule,
        InternalCardModule
    ],
  exports: [
    SliderPokemonsComponent
  ]
})
export class SliderPokemonsModule { }

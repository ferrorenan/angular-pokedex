import {Component, Input, OnInit} from '@angular/core';
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import {DataService} from "../../services/data.service";

SwiperCore.use([Navigation, Pagination,]);

@Component({
  selector: 'app-slider-pokemons',
  templateUrl: './slider-pokemons.component.html',
  styleUrls: ['./slider-pokemons.component.scss']
})
export class SliderPokemonsComponent implements OnInit {

  pokemons: any[] = [];

  @Input() sliderIdentification: string | undefined = '';
  @Input() speed: number = 800;
  @Input() direction: any = 'horizontal';
  @Input() autoHeight: boolean | undefined = false;
  @Input() roundLengths: boolean | undefined = true;
  @Input() slidesPerView: number | undefined = 1.5;
  @Input() centeredSlides: boolean | undefined = true;
  @Input() spaceBetween: number | undefined = 5;
  @Input() container: any = '.js-slider-home';
  @Input() slideToClickedSlide: boolean | undefined = false;
  @Input() loop: boolean | undefined = true;
  @Input() pagination: any = false;
  @Input() navigation: any = {
    nextEl: '.js-slider-gallery-button-next-home',
    prevEl: '.js-slider-gallery-button-prev-home',
  };
  @Input() breakpoints: any = {
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30
    }
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): any {

    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string}) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        }) ;
      });
  }

}

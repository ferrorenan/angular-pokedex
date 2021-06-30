import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemonDetail: any[] = [];
  pokemonCharacteristics: any[] = [];

  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMoreData(id!).subscribe((response: any) => {
      this.pokemonDetail.push(response)
      console.log(this.pokemonDetail);
    })

    this.getCharacteristicsPokemon();
  }

  getCharacteristicsPokemon(): void {

    const idPokemon = this.route.snapshot.paramMap.get('id');
    this.service.getMCharacteristics(idPokemon!).subscribe(
      (pokemonCharacteristics: any) => {
        this.pokemonCharacteristics.push(pokemonCharacteristics);
      }
    )
  }
}

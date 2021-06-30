import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPanelComponent } from './pokedex-panel.component';

describe('PokedexPanelComponent', () => {
  let component: PokedexPanelComponent;
  let fixture: ComponentFixture<PokedexPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

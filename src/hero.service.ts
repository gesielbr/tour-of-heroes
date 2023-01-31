import { Injectable } from '@angular/core';
import { Hero } from './app/hero.model';
import { HEROES } from './app/heroes/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}

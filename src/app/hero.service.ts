import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    // return throwError(new Error('Ocorreu um problema'));
    return heroes;
  }
}

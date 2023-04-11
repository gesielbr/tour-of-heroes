import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  /* 
  local
  http://localhost:4200/heroes
  http://localhost:3000/api/heroes 

  frontend
  http://heroes.vercel.app/heroes

  backend produção exemplos
  http://heroes.vercel.app/api/heroes
  http://heroes.herokuapp.com/api/heroes
  */

  constructor(private messageService: MessageService, http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.log('fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  /* 
  GET: obter os dados
  PUT/PATCH: alterar o dado
  POST: criar novo dado
  DELETE: criar novo dado 
  */

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

  /*
  GET /heroes
  GET /heroes/id
  POST /heroes
  PUT /heroes/id
  DELETE /heroes/id
   */

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  //  GET /heroes
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));

    // const heroes = of(HEROES);
    // this.log('fetched heroes');
    // return heroes;
  }

  // GET /heroes/id
  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
      );

    // const hero = HEROES.find((hero) => hero.id === id)!;
    // this.log(`fetched hero id=${id}`);
    // return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}

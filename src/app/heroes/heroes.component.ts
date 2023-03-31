import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });

    /*  this.heroService.getHeroes().subscribe({
      next(res) {
        console.log('O retorno da API foi: ' + JSON.stringify(res, null, 2));
      },
      error(err) {
        console.error('Algo errado aconteceu: ' + err);
      },
      complete() {
        console.log('Consulta a API realizada com sucesso!');
      },
    }); */

    /* this.heroService.getHeroes().subscribe(
      function (res) {
        console.log(res);
      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log('Requisição concluída com sucesso');
      }
    ); */

    /* this.heroService.getHeroes().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Requisição concluída com sucesso');
      }
    ); */

    /*  this.heroService.getHeroes().subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      () => console.log('Requisição concluída com sucesso')
    ); */

    /* const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Antes do subscribe');

    observable.subscribe({
      next(res) {
        console.log('Pegou o valor ' + res);
      },
      error(err) {
        console.error('Algo errado aconteceu: ' + err);
      },
      complete() {
        console.log('Realizado co sucesso');
      },
    });

    console.log('Depois do subscribe'); */
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}

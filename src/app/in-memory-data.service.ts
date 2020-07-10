import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

export const environment = {
  production: true,
  baseUrl: '/api',
};


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: "Homem de Ferro" },
      { id: 2, name: "Hulck" },
      { id: 3, name: "Homem Aranha" },
      { id: 4, name: "Capitao America" },
      { id: 5, name: "Thor" },
      { id: 6, name: "Mulher Maravilha" },
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    // retorna apenas o id dos heroes: [11, 12, 13, 14, 15, 16]
    const heroIds = heroes.map((hero) => hero.id);

    // retorna o maior valor dos heroIds: Math.max(11, 12, 13, 14, 15, 16)
    const maxId = Math.max(...heroIds);

    // incrementa o maxId ou retorna 1 caso nao tenha heroes no array
    const nextId = heroes && heroes.length > 0 ? maxId + 1 : 1;

    return nextId;

  }
}


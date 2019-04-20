import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Bheeshma' },
      { id: 12, name: 'Arjun' },
      { id: 13, name: 'Yudisthir' },
      { id: 14, name: 'Bheem' },
      { id: 15, name: 'Nakul' },
      { id: 16, name: 'Sahadev' },
      { id: 17, name: 'Karna' },
      { id: 18, name: 'Dronacharya' },
      { id: 19, name: 'Duryodhan' },
      { id: 20, name: 'Krishna' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
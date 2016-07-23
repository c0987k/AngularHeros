
/// <reference path="../typings.d.ts" />
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">

  </div>
  `

})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
  id: 1,
  name: 'Marv Cook'
};
}
export class Hero {
  id: number;
  name: string;
}

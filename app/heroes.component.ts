import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    //The constructor itself does nothing. The parameter simultaneously defines a private _heroService property and identifies it as a HeroService injection site.
    constructor(
        private _router: Router,
        private _heroService: HeroService) { }


    // getHeroes() {
    //   this.heroes = this._heroService.getHeroes();  //no promise
    // }

    //using promise, 2 sec timeout
    // getHeroes() {
    //   this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    // }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }



    onSelect(hero: Hero) { this.selectedHero = hero; }

    //could also use this technique and pass in selectedHero
    // gotoDetail(hero: Hero) {
    //     let link = ['HeroDetail', { id: hero.id }];
    //     this._router.navigate(link);
    // }
    gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
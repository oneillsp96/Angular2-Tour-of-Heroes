import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
	// getHeroes() {
	// 	return HEROES;
	// }

	//using promise
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly() {
		return new Promise<Heroes[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
	
}
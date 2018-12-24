import { Component } from '@angular/core';


import { HomePage} from '../home/home';
import { MediaPage} from '../media/media';
import { CoffeePotsPage} from '../coffee-pots/coffee-pots';


@Component({
  
  templateUrl: 'derfaffee.html'
})
export class DerfaffeePage {

  homeRoot = HomePage;
  mediaRoot = MediaPage;
  coffeePotsRoot = CoffeePotsPage;


  constructor() {}

}

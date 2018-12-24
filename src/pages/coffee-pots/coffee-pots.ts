import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-coffee-pots',
  templateUrl: 'coffee-pots.html',
})
export class CoffeePotsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeePotsPage');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private _datacards: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams){

    this._datacards = [
      {title: "Enjoying a Coffee ", image: "adult-attractive-background-544117.png", descripcion: "Lorem."},
      {title: "Sharing Moments", image: "aroma-art-beverage-1251175.png",         descripcion: "Lorem."},
      {title: "Happiness", image: "art-blur-cappuccino-302899.png",         descripcion: "Lorem."},
      {title: "Tasting a Coffee", image: "attractive-bar-barista-296888.png",      descripcion: "Lorem."},
      {title: "Coffe & Work", image: "beverage-coffee-computer-877695.png",    descripcion: "Lorem."},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

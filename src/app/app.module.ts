import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DerfaffeePage } from '../pages/derfaffee/derfaffee';
import { HomePage } from '../pages/home/home';
import { MediaPage } from '../pages/media/media';
import { CoffeePotsPage } from '../pages/coffee-pots/coffee-pots';

@NgModule({
  declarations: [
    MyApp,

    DerfaffeePage,
    HomePage,
    MediaPage,
    CoffeePotsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    DerfaffeePage,
    HomePage,
    MediaPage,
    CoffeePotsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

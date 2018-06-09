import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  informacoes: any;

  constructor(public navCtrl: NavController,
    public restProvider: RestProvider) {
    this.informacoesPet();
  }

  public informacoesPet(): void {
    this.restProvider.getAll()
      .then(data => {
        this.informacoes = data;
        console.log(this.informacoes);
      });
  }


}

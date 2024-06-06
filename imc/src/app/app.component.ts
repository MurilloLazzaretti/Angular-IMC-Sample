import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imc';
  altura: number = 0 ;
  peso: number = 0;

  calcular(){
    let imc = this.peso / (this.altura * this.altura);
    alert("Seu IMC é :" + imc.toString());
  }
}

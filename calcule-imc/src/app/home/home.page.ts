import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  poids='';
  taille='';
  imc='';
  color ='';
  hidden=true;
  constructor() {}

  onCalculeIMC(){
    let poids = parseFloat(this.poids);
    let taille = parseFloat(this.taille);
    this.hidden=false;
    if(!isNaN(poids) && !isNaN(taille) ){
      let calcule = parseFloat((poids/ (taille*taille)).toFixed(1));   
      if (calcule <= 18.5){
         this.imc = "Votre IMC : " + calcule+ " = maigreur";
         this.color = 'warning';      
      }
      else if (calcule <= 25){
        this.imc =  "Votre IMC : " + calcule+ " = poids normal";
        this.color = 'success';
      }
       else if (calcule >= 25){
        this.imc =  "Votre IMC : " + calcule+ " = surpoids";
        this.color = 'danger';      
      }
    } else{
     this.imc= "Veillez entrer des chiffres correctes"
     this.color = 'danger';
     this.hidden=false;
    }
  }
}

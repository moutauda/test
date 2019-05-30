import { Component, OnInit } from '@angular/core';
import {ResultatsService} from "../services/resultats.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  resultats = undefined

  teams = ['Usa',	'Mexique',	'Colombie',	'Bolivie',	'Hollande',	'Belgique',	'Irlande',
    'Espagne',	'Maroc',	'Brésil',	'Argentine',	'Allemagne',	'Suisse',	'Nigéria',
    'Italie',	'Cameroun',	'Norvége',	'Suède',	'Bulgarie',	'Roumanie',	'Grèce',
    'Arabie Saoudite',	'Russie',	'Corée',	'Japon', 'France',	'Angleterre',	'Uruguay']

  vicJ1 = 0;
  vicJ2 = 0;

  teamJ1 = [];
  teamJ2 = [];

  leftTeamJ1 = [];
  leftTeamJ2 = [];

  constructor(private resultatsService: ResultatsService) { }

  ngOnInit() {
    this.resultats = this.resultatsService.getAll();
    console.log(this.resultats);
    this.getVictory();
    this.getTeams();
  }

  getVictory () {
    for(let i = 0; i < this.resultats.length; i++){
      if (this.resultats[i].score1 > this.resultats[i].score2 ){
        this.vicJ1 += 1;
      }else {
        this.vicJ2 += 1;
      }
    }
    console.log('nb victoire j1 : ' + this.vicJ1);
    console.log('nb victoire j2 : ' + this.vicJ2);
  }

  getTeams () {
    for(let i = 0; i < this.resultats.length; i++){
     this.teamJ1.push(this.resultats[i].equipe1);
     this.teamJ2.push(this.resultats[i].equipe2);
    }
    console.log(this.teamJ1);
    console.log(this.teamJ2);

    for(let i = 0; i < this.teams.length; i++){
      if (!this.teamJ1.includes(this.teams[i])){
        this.leftTeamJ1.push(this.teams[i]);
      }
      if (!this.teamJ2.includes(this.teams[i])){
        this.leftTeamJ2.push(this.teams[i]);
      }
    }
    console.log(this.teams.length);
    console.log(this.leftTeamJ1);
    console.log(this.leftTeamJ2);
  }
}

import { Component, OnInit } from '@angular/core';
import {ResultatsService} from "../services/resultats.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  resultats = undefined

  constructor(private resultatsService: ResultatsService) { }

  ngOnInit() {
    this.resultats = this.resultatsService.getAll();
    console.log(this.resultats);
    this.getVictory();
    this.getTeams();
  }


  getVictory () {

  }

  getTeams () {

}

}

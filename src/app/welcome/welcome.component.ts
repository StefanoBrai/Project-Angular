import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {     //implementa un'interfaccia
  welcomeMessage : string;

  constructor() { 
    this.welcomeMessage = "ciao bello";
  }

  ngOnInit() {    //Life cycle method, viene chiamato subito dopo che la componente è stata creata
  }

}

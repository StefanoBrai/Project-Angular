import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Professionist } from '../Professionist';


@Component({
  selector: 'app-professionist-list',
  templateUrl: './professionist-list.component.html',
  styleUrls: ['./professionist-list.component.css']
})
export class ProfessionistListComponent implements OnInit {
  @Input("professionists") professionists: Professionist[];
  @Output("delete") deleteEmitter: EventEmitter<string> 
          = new EventEmitter<string>();
  @Output("select") selectEmitter: EventEmitter<Professionist> 
          = new EventEmitter<Professionist>();
  constructor() { }
  onDelete(id: string){
    this.deleteEmitter.emit(id);
  }
  onSelect(pro: Professionist){
    this.selectEmitter.emit(pro);
  }
  ngOnInit() {
  }

}

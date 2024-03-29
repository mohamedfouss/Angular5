import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  constructor(private appareilService: AppareilService) { 
    
  }

  getappareilStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus === 'Allumé'){
      return 'green';
    }
    if(this.appareilStatus === 'Eteint'){
      return 'red';
    }
  }

  ngOnInit() {
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}

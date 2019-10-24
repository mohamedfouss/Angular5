import { Component , OnInit} from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
 
  isAuth = false;
  title = 'ANGULAR 8';
  appareils: any[];
  constructor(private appareilService: AppareilService) { 
    setTimeout(() => { this.isAuth = true; }, 2000);    
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

}

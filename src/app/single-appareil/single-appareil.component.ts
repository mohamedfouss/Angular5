import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil name';
  status: string = 'Status par defaut';
  constructor(private appareilService: AppareilService) {

   }

  ngOnInit() {
  }

}

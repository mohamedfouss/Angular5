import { Component , OnInit} from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  lastUpdate = new Promise(
    (resolve, reject) => {
        const date = new Date();
        setTimeout(
          ()=>{
            resolve(date);
          }, 4000
        );
    }
  );
}

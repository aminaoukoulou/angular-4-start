import { Component } from '@angular/core';
import {ExoComponent} from './exo/exo.component';/*importer le fichier exo*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

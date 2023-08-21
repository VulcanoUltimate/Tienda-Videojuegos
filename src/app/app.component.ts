import { Component } from '@angular/core';
import { CONFIGURATION } from 'src/global/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = CONFIGURATION.appName;
}

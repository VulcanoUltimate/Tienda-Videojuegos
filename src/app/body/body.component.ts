import { Component } from '@angular/core';
import { CONFIGURATION } from 'src/global/configuration';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  nombre = CONFIGURATION.appName;
}

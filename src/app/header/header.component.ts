import { Component } from '@angular/core';
import { CONFIGURATION } from 'global/configuration';
import { ORDER } from 'global/filters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public titulo = CONFIGURATION.appName;
  public criterios = [ORDER.NONE, ORDER.ASC, ORDER.DESC];
}

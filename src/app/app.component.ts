import { Mission } from './models/mission.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101339235-lab-test2-comp3133';
  loading = false;
  mission: Mission = { mission_name: '', launch_year: '', details: '', links: { mission_patch_small: '' } };
}
import { Component, Input } from '@angular/core';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent {
  @Input() mission: Mission = {
    mission_name: '',
    launch_year: '',
    details: '',
    links: {
      mission_patch_small: '',
    },
    flight_number: 0,
  };
}
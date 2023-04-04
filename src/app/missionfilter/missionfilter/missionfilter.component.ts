import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  @Output() yearSelected = new EventEmitter<number>();
  launchYear: number;

  constructor() {
    this.launchYear = new Date().getFullYear();
  }

  filterMissions() {
    this.yearSelected.emit(this.launchYear);
  }
  
  onYearSelected() {
    this.yearSelected.emit(this.launchYear);
  }
}
import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../network/space-x.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  launchYear: number = 0; // Initialize launchYear to 0
  loading = false;
  missionSelected: Mission | null = null;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.loading = true;
    this.spaceXService.getMissions().subscribe((missions) => {
      this.missions = missions;
      this.loading = false;
    });
  }

  filterMissions(year?: number) {
    if (!year) {
      this.loading = true;
      this.spaceXService.getMissions().subscribe((missions) => {
        this.missions = missions;
        this.loading = false;
      });
    } else {
      this.loading = true;
      this.spaceXService.getMissionByYear(year).subscribe((missions) => {
        this.missions = missions;
        this.loading = false;
      });
    }
  }

  selectMission(mission: Mission) {
    this.missionSelected = mission;
  }
}
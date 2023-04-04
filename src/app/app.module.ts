import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { SpaceXService } from './network/space-x.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MissionListComponent } from './missionlist/missionlist/missionlist.component';
import { MissionDetailsComponent } from './missiondetails/missiondetails/missiondetails.component';
import { MissionFilterComponent } from './missionfilter/missionfilter/missionfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionDetailsComponent,
    MissionFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }

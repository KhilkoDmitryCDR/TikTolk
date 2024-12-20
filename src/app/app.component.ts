import { ProfileService } from './data/services/profile.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService:ProfileService=inject(ProfileService);
  profiles:Profile[]=[]
  constructor(){
    this.profileService.getTestAccounts().subscribe(val=>this.profiles=val)
  }

}

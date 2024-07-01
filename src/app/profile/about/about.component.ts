import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: string;
  
  constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
      this.about =  this.profileService.about;
    }
  
}

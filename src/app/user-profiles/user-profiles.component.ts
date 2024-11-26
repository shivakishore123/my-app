import { Component } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent {
 
  userprofile:any = [];

  constructor(private _userprofile:UserProfileService) {
    _userprofile.getuserprofile().subscribe(
      (data:any)=>{
        this.userprofile = data;
      },
      (err:any)=>{
        alert("some internal error");
      }
    )
  }
     
    }
  


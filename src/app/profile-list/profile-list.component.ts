import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit  {

  users: any;
  showOnlyTaglist:any[] = [];
  options: AnimationOptions = {
    path: '../../assets/lottie/empty-lottie.json', 
  };
  constructor(private router: Router, private userService: UserService) {}


  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(res=>{
      this.users =res;
      this.users.forEach((obj: { skillsets: string; }) => {
        let temp: any[] = [];
        temp = obj.skillsets.split(';').length >= 1 ? obj.skillsets.split(';'): [] ;
        this.showOnlyTaglist.push(temp);
      });
    });
  }



  profiles: Profile[] = [
    {
      id: 1,
      name: 'John Doe',
      pictureUrl: 'https://example.com/john-doe.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      pictureUrl: 'https://example.com/jane-smith.jpg'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      pictureUrl: 'https://example.com/alex-johnson.jpg'
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}

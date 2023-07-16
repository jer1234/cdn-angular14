import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AnimationOptions } from 'ngx-lottie';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user: User;
  skillTags :any=[];

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }

  registerUser() {
  if(this.user.username &&  this.user.username !="" && this.user.phoneNumber&& this.user.phoneNumber !="" && this.user.hobby && this.user.hobby !="" && this.user.email && this.user.email !=""){
     this.user.skillsets = this.skillTags.join(';');
      this.userService.addUser(this.user).subscribe((res)=>{
      if(res.status == 200){
        Swal.fire({
          title: " User Added!",
          icon: "success",
        });
        this.router.navigate(['/users']);
      }else{
        Swal.fire({
          title: "Oops!",
          icon: "error",
        });
      }
    });
    }
    else{
      Swal.fire({
        title: "Required",
        text: "Make sure to complete all the required field(s).",
        icon: "warning",
      });
    }
  }

  cancel() {
    this.router.navigate(['/users']);
  }


  options: AnimationOptions = {
    path: '../../assets/lottie/register-lottie.json', 
  };
}

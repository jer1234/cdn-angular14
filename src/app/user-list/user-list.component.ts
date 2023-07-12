import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public updateForm:FormGroup;
  users: any;
  edit_user_data:any;
  taglist=[];
  showOnlyTaglist:any[] = [];

  options: AnimationOptions = {
    path: '../../assets/lottie/empty-lottie.json', 
  };

  constructor(private router: Router, private userService: UserService,private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      username:'',
      email: '',
      phoneNumber:'',
      hobby:'',
      skillsets:''
    });
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit(){
    this.getUser();
    
  }

  getUser(){
    this.userService.getUsers().subscribe(res=>{
      this.users =res;
      this.users.forEach((obj: { skillsets: string; }) => {
        let temp: any[] = [];
        if(obj.skillsets != "")
          temp = obj.skillsets.split(';').length >= 1 ? obj.skillsets.split(';'): [obj.skillsets] ;

        this.showOnlyTaglist.push(temp);
      });
    });
  }

  editUser(user:any) {
    this.displayStyle = "block";
    this.edit_user_data=null;
    this.edit_user_data = {
      username:user.username,
      email:user.email,
      phoneNumber:user.phoneNumber,
      hobby:user.hobby,
      skillsets:user.skillsets
    }
    this.updateForm.setValue(this.edit_user_data);
    if(user.skillsets != "")
      this.taglist = user.skillsets.split(';').length >= 1 ? user.skillsets.split(';'): [user.skillsets] ;
    else
      this.taglist=[];
  }

  deleteUser(user: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user).subscribe(res=>{
          if(res.status == 200 ){
            Swal.fire(
              'Deleted!',
              'Record has been deleted.',
              'success'
            );
            this.getUser();
          }else{
            Swal.fire(
              'Oops!',
              'Something Not Right .',
              'error'
            );
          }

        });
      }else{
        this.closePopup();
      }
    })
  }

  updateUser(username:any) {
    this.edit_user_data= {
      username:username,
      email: this.updateForm.get('email')?.value,
      phoneNumber: this.updateForm.get('phoneNumber')?.value,
      hobby:this.updateForm.get('hobby')?.value,
      skillsets:this.taglist.join(';')
    };
    if(this.edit_user_data.email !="" && this.edit_user_data.phoneNumber !="" && this.edit_user_data.phoneNumber !=""){
      console.log("SINI",this.edit_user_data,this,this.taglist);
      this.userService.updateUser(this.edit_user_data).subscribe(res=>{
      if(res.status == 200){
        Swal.fire({
          title: "Update Success!",
          icon: "success",
        });
        this.showOnlyTaglist = [];
        this.getUser();
      }else{
        Swal.fire({
          title: "Update Failed!",
          icon: "error",
        });
      }
    });
    }
    this.closePopup();

    this.edit_user_data ={};
  }

  addUser() {
    this.router.navigate(['/register']);
  }

}

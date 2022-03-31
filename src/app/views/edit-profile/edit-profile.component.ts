import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  user:Users = {}
  file:any
  getProfile(){
    this.userService.getProfile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user = res
      }
    })
  }

  updateUser(data:any){
    this.userService.updateProfile(data).subscribe({
      next:()=>{
        this.uploadImage()
        this.router.navigateByUrl('profile')
      }
    })
  }

  handelUpload(event:any){
    console.log(event)
    this.file = event.target.files
  }

  uploadImage(){
    if(this.file){
    const myData = new FormData()
    myData.append('avatar',this.file[0])
    this.userService.addImage(myData).subscribe(()=>{})
    }
  }

  ngOnInit(): void {
    this.getProfile()
  }

}

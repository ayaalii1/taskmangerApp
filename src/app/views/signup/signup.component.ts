import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  ageMsg:string = ""
  invalidEmail:boolean = false
  invalidAge:boolean = false
  invalidPassword:boolean = false
  passwordMsg:string = ""

  signUp(data:any){
   this.authService.signUp(data).subscribe({
     next:(res:any)=>{
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigateByUrl('profile')

     },
     error:(httpError:any)=>{
       console.log(httpError)
      //  if(httpError.error === 'msg static age'){
      //    this.ageMsg = 'msg static'
      //  }
      if(httpError.error.code === 11000){
       this.invalidEmail = true
      }
      else if(httpError.error.errors.age){
        this.invalidAge = true
        this.ageMsg = httpError.error.errors.age.message
      }
      else if(httpError.error.errors.password){
        this.invalidPassword = true
        this.passwordMsg = httpError.error.errors.password.message
      }
     }
   })
  }

  changeEmail(){
    this.invalidEmail = false
  }
  changeAge(){
    this.invalidAge = false
  }
  chagePassword(){
    this.invalidPassword = false
  }

  ngOnInit(): void {
  }

}

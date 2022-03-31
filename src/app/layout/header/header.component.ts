import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  logout(){
    this.authService.logout().subscribe({
      next:()=>{
        localStorage.removeItem('token')
      }
    })
  }

  get isLoggedIn(){
    let token = this.authService.getToken()
    if(token)
    return true

    return false
  }

  ngOnInit(): void {
  }

}

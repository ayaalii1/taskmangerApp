import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authSerivce:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //  let token = localStorage.getItem('token')
  let token = this.authSerivce.getToken()

  // set token header
  let newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
  return next.handle(newReq)
  }
}

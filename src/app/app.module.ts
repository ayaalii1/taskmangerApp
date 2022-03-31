import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { ViewTaskComponent } from './views/view-task/view-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    TaskService,
    AuthGuardService,
    {
      // intercept / modify
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
     multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

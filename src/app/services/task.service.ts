import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  // addTask(task:any){
  //   return this.http.post(this.url+'tasks',task)
  // }
  getTasks(){
    return this.http.get(this.url+'tasks')
  }

  getSingle(id:any){
    return this.http.get(this.url + 'tasks/' + id)
  }

  updateTask(id:any,body:any){
    return this.http.patch(this.url + 'tasks/' + id ,body)
  }

  deleteTask(id:any){
    return this.http.delete(this.url + 'tasks/' + id)
  }

  addTaskWithImage(data:any){
    return this.http.post(this.url+'tasks',data)
  }

}

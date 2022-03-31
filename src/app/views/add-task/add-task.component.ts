import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/tasksInterface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private fb:FormBuilder,private taskService:TaskService,private router:Router) { }

  taskForm = this.fb.group({
    title:['',Validators.required],
    description:['',Validators.required],
    completed:[false],
    img:[]
  })
  task:Tasks = {}
  file:any

  // without image
  // addTask(data:any){
  //   this.taskService.addTask(data).subscribe({
  //     next:(res:any) =>{
  //      // this.task = res
  //       // [(ngModel)]='task.completed'
  //       console.log(res)
  //       this.router.navigateByUrl('viewTask')

  //     }
  //   })
  // }

  handelUpload(event:any){
    this.file = event.target.files
  }

  addTask(task:any){
    console.log(task)
    const myData = new FormData()
    if(this.file){
      myData.append('image',this.file[0])
    }
    myData.append('title',task.title)
    myData.append('description',task.description)
    myData.append('completed',task.completed)
    this.taskService.addTaskWithImage(myData).subscribe({
      next:()=>{
        this.router.navigateByUrl('viewTask')
      }
    })
    
  }



  get taskValues(){
    return this.taskForm.controls
  }

  ngOnInit(): void {
  }

}

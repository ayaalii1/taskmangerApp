import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/tasksInterface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks:Tasks[] =[]
  constructor(private taskSerivice:TaskService) { }

  getAllTasks(){
    this.taskSerivice.getTasks().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.tasks = res
      }
    })
  }

  deleteTask(id:any,i:number){
    this.taskSerivice.deleteTask(id).subscribe({
      next:()=>{
        this.tasks.splice(i,1)
      }
    })
  }

  ngOnInit(): void {
    this.getAllTasks()
  }

}

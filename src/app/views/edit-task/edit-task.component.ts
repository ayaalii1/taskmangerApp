import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/tasksInterface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router) { }
  task:Tasks = {}
  id:string = this.route.snapshot.params['id']
  getSingleTask(){
    this.taskService.getSingle(this.id).subscribe({
      next:(res:any)=>{
        this.task = res
      }
    })
  }

  updateTask(data:any){
    this.taskService.updateTask(this.id,data).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('viewTask')
      }
    })
  }

  ngOnInit(): void {
    this.getSingleTask()
  }

}

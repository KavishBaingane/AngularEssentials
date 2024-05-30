import { Component , Input, ɵgetUnknownElementStrictMode } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required:true}) name?: string;

  tasks = [
    {
      id:'t1',
      userId : 'u1',
      title: 'Master Angular',
      summary : 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id:'t2',
      userId:'u2',
      title: 'Build the protype',
      summary : 'Nuild a first protype of the onle shop website',
      dueDate: '2024-05-31'
    },
    {
      id:'t3',
      userId : 'u3',
      title: 'Prepare issue templte',
      summary : 'Prepare the first template regarding issues consisting in the project',
      dueDate: '2024-12-31'
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId===this.userId)!;
  }
  
  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task)=>task.id!==id);
  }
}



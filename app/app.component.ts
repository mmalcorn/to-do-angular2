import { Component } from '@angular/core'; 

// view
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Angular 2 To Do App</h1>
    <h3 (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
    <div>
      <h1>Edit Task</h1>
      <div>
        <label>Enter task description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>Enter task ID:</label>
        <input [(ngModel)]="selectedTask.id">
      </div>
    </div>
  </div>
  `
})

// controller
export class AppComponent {
  public tasks: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Jeet Kun Do.", 1),
      new Task("Rewatch all the Twilight movies then blow my brains out.", 2),
      new Task("Do the laundry once it gets too piled up, and I cant think because of it.", 3)
  ];
  selectedTask: Task = this.tasks[0];
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
}

// model
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {  }
}

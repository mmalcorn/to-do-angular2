import { Component } from '@angular/core';

// view
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Angular 2 To Do App</h1>
    <pies></pies>
    <div *ngFor="let currentTask of tasks">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
    <div *ngIf="selectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter task description:</label>
        <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
        <label>Enter task ID:</label>
        <input [(ngModel)]="selectedTask.id">
        <button (click)="finishedEditing()">Done</button>
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
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

// model
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {  }
}

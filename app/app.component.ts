import { Component } from '@angular/core';
import { Task } from './task.model';

// view
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Angular 2 To Do App</h1>
    <pies></pies>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      ></task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
  </div>
  `
})

// controller
export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

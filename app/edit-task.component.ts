import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div>
        <label>Enter task description:</label>
        <input [(ngModel)]="childSelectedTask.description">
      </div>
      <div>
        <label>Enter task ID:</label>
        <input [(ngModel)]="childSelectedTask.id">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
    `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;


}

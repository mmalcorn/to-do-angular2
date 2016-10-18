import { Component } from '@angular/core';

// view
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Angular 2 To Do App</h1>
    <h3 *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
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
}

// model
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {  }
}

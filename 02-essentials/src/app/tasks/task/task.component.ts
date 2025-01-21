import { Component, inject, input } from '@angular/core';
import { type Task } from '../task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  // complete = output<string>();
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
    // this.complete.emit(this.task().id);
  }
}

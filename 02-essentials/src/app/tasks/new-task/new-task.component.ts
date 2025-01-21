import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string | undefined>();
  close = output<void>();
  // add = output<NewTaskData>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId() ?? ''
    );
    this.close.emit();
    // this.add.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   date: this.enteredDate(),
    // });
  }
}

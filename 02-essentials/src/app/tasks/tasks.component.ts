import { Component, computed, inject, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string | undefined>();
  name = input<string>();
  isAddingTask = false;

  private taskService = inject(TaskService);

  selectedUserTasks = computed(() => {
    const uId = this.userId() ?? '';
    if (uId) {
      const selectedUser = this.taskService.getUserTasks(uId);
      return selectedUser;
    } else {
      return undefined;
    }
  });

  // onCompleteTask(id: string) {
  //   this.taskService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.taskService.addTask(taskData, this.userId() ?? '');
  //   this.isAddingTask = false;
  // }
}

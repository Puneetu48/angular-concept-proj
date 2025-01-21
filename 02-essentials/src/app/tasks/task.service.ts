import { computed, Injectable, signal } from '@angular/core';
import { type NewTaskData } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  //   private dummyTask = [
  //     {
  //       id: 't1',
  //       userId: 'u1',
  //       title: 'Master Angular',
  //       summary:
  //         'Learn all the basic and advanced features of Angular & how to apply them.',
  //       dueDate: '2025-12-31',
  //     },
  //     {
  //       id: 't2',
  //       userId: 'u3',
  //       title: 'Build first prototype',
  //       summary: 'Build a first prototype of the online shop website',
  //       dueDate: '2024-05-31',
  //     },
  //     {
  //       id: 't3',
  //       userId: 'u3',
  //       title: 'Prepare issue template',
  //       summary:
  //         'Prepare and describe an issue template which will help with project management',
  //       dueDate: '2024-06-15',
  //     },
  //   ];

  //   private tasks = signal(this.dummyTask);

  private tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  constructor() {
    // const task = localStorage.getItem('tasks');
    // if (task) {
    //   this.dummyTask = JSON.parse(task);
    // }
  }

  allTasks = this.tasks.asReadonly();

  //   getUserTasks(userId: string) {
  //     return computed(() =>
  //       this.tasksSignal().filter((task) => task.userId === userId)
  //     );
  //   }
  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newAddedTask = {
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    };
    this.tasks.update((values) => [newAddedTask, ...values]);
    // this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
    // this.saveTasks();
  }

  //   private saveTasks() {
  //     localStorage.setItem('tasks', JSON.stringify(this.dummyTask));
  //   }
}

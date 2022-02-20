import { Task } from "../interfaces/Task";

export function addTask(task: Task) {
  const taskList = localStorage.getItem("tasks-list");
  if (taskList) {
    let tasks: Task[] = JSON.parse(taskList);
    tasks.push(task);
    localStorage.setItem("tasks-list", JSON.stringify(tasks));
    return;
  }
  let tasks: Task[] = [];
  tasks.push(task);
  localStorage.setItem("tasks-list", JSON.stringify(tasks));
}

export function removeTask(task: Task) {
  const taskList = localStorage.getItem("tasks-list");
  if (taskList) {
    const tasks: Task[] = JSON.parse(taskList);
    const filteredTasks = tasks.filter((t) => {
      return t.name !== task.name;
    });
    localStorage.setItem("tasks-list", JSON.stringify(filteredTasks));
  }
}

export function updateTaskList(tasks: Task[]) {
  localStorage.setItem("tasks-list", JSON.stringify(tasks));
}

export class Tasks {
  constructor (projectId, taskId, name, date, description, priority) {
    this.projectId = projectId;
    this.taskId = taskId;
    this.name = name;
    this.date = date;
    this.description = description;
    this.priority = priority;
  }
}
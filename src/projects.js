export class Projects {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.tasks = [];
  }

  addTaskToProject(task) {
    this.tasks.push(task)
  }
}
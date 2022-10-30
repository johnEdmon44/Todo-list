export const task = (projectId, id, name, description, priority, dueDate) => {
  return {
    projectId: projectId,
    id: id,
    name: name,
    description: description,
    priority: priority,
    dueDate: dueDate,
    status: false
  }
}
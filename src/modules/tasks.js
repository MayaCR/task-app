import { tasks } from './localStorage'

export class Task {
	constructor(
		id,
		title,
		description,
		dueDate = null,
		priority = null,
		project = null,
		isComplete = false,
	) {
		this.id = id
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.project = project
		this.isComplete = isComplete
	}

	addTask() {
		let taskTitle = document.querySelector('#task-title').value
		let taskDescription = document.querySelector('#task-description').value
		let taskProject = document.querySelector('#task-project').value
		let taskPriority = document.querySelector('#task-priority').value
		let taskDueDate = document.querySelector('#task-dueDate').value

		let task = new Task(
			taskTitle,
			taskDescription,
			taskProject,
			taskPriority,
			taskDueDate,
		)

		tasks.push(task)
	}
}

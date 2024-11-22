import { createTaskForm } from './forms'

export class View {
	constructor() {
		this.tasksHeader = document.querySelector('#tasksHeader')
		this.tasksWrapper = document.querySelector('#tasksWrapper')
		this.addTaskBtn = document.querySelector('#addTaskBtn')
	}

	initializeView() {
		tasksHeader.textContent = 'Today'
		tasksWrapper.textContent = 'Nothing for today'
	}

	updateView(e, tasksList) {
		switch (e.target.id) {
			case 'inboxBtn':
				tasksHeader.textContent = 'Inbox'
				tasksWrapper.textContent = 'Nothing in your inbox'
				break
			case 'todayBtn':
				tasksHeader.textContent = 'Today'
				break
			case 'upcomingBtn':
				tasksHeader.textContent = 'Upcoming'
				break
			case 'allBtn':
				tasksHeader.textContent = 'All'
				break
			case 'addTaskBtn':
				this.showForm()
				break
			case 'cancelBtn':
				this.hideForm()
				break
		}

		// tasksWrapper.append(tasksList)
	}

	showForm() {
		console.log('Showing form')
	}

	hideForm() {
		console.log('Form hidden')
	}

	clearContent() {
		tasksWrapper.textContent = ''
	}
}

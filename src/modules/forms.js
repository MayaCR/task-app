import { projects } from './localStorage'

const createTaskForm = () => {
    const form = document.createElement('form')
    const taskTitleInput = document.createElement('input')
    const taskDescriptionInput = document.createElement('input')
    const taskProjectSelection = document.createElement('select')
    const taskPrioritySelection = document.createElement('select')
    const taskDueDateInput = document.createElement('input')
    const buttonWrapper = document.createElement('div')
    const cancelBtn = document.createElement('button')
    const submitBtn = document.createElement('button')

    let priorityOptions = ['priority', 'low', 'medium', 'high']

    taskTitleInput.id = 'taskTitle'
    taskTitleInput.type = 'text'
    taskTitleInput.name = 'title'
    taskTitleInput.placeholder = 'Task'
    taskTitleInput.required = true

    taskDescriptionInput.id = 'taskDescription'
    taskDescriptionInput.type = 'text'
    taskDescriptionInput.name = 'description'
    taskDescriptionInput.placeholder = 'Sample description'

    taskProjectSelection.id = 'taskProject'
    taskProjectSelection.name = 'project'
    for (let i = 0; i < projects.length; i++) {
        const taskProjectOption = document.createElement('option')
        taskProjectOption.value = projects[i]
        taskProjectOption.textContent = uppercaseFirstLetter(projects[i])
        taskProjectSelection.appendChild(taskProjectOption)
    }

    taskPrioritySelection.id = 'taskPriority'
    taskPrioritySelection.name = 'priority'
    for (let i = 0; i < priorityOptions.length; i++) {
        const taskPriorityOption = document.createElement('option')

        if (priorityOptions[i] === 'priority') {
            taskPriorityOption.selected = true
            taskPriorityOption.value = ''
        } else {
            taskPriorityOption.value = priorityOptions[i]
        }
        taskPriorityOption.textContent = uppercaseFirstLetter(priorityOptions[i])
        taskPrioritySelection.appendChild(taskPriorityOption)
    }

    taskDueDateInput.id = 'taskDueDate'
    taskDueDateInput.type = 'date'
    taskDueDateInput.placeholder = 'Due Date'

    cancelBtn.id = 'cancelBtn'
    cancelBtn.classList.add('btn')
    cancelBtn.textContent = 'Cancel'
    cancelBtn.type = 'button'

    submitBtn.id = 'submitBtn'
    submitBtn.classList.add('btn')
    submitBtn.textContent = 'Submit'
    submitBtn.type = 'submit'

    // buttonWrapper.classList.add('button-wrapper')
    buttonWrapper.append(cancelBtn, submitBtn)

    form.id = 'taskForm'
    form.append(
        taskTitleInput,
        taskDescriptionInput,
        taskProjectSelection,
        taskPrioritySelection,
        taskDueDateInput,
        buttonWrapper,
    )

    return form
}

const createProjectForm = () => {
    console.log('Form created')
}

// Helper functions
function uppercaseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export { createTaskForm }

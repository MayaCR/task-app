import './styles/main.css'
import { updateTaskView } from './modules/UIManager'

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const upcomingBtn = document.querySelector('#upcomingBtn')
const allBtn = document.querySelector('#allBtn')

inboxBtn.addEventListener('click', updateTaskView)
todayBtn.addEventListener('click', updateTaskView)
upcomingBtn.addEventListener('click', updateTaskView)
allBtn.addEventListener('click', updateTaskView)

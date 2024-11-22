import './styles/main.css'
import { View } from './modules/view'

const view = new View()

document.addEventListener('DOMContentLoaded', () => {
	view.initializeView()
})

document.addEventListener('click', (e) => {
	view.clearContent()
	view.updateView(e)
})

import { displayPage } from './displayPage.js'

const display = document.getElementById('content')
const aboutButton = document.getElementById('about')
const menuButton = document.getElementById('menu')
const contactButton = document.getElementById('contact')

aboutButton.addEventListener('click', () => {
  display.innerHTML = displayPage('about')
  aboutButton.style.borderBottom = '3px solid white'
  menuButton.style.borderBottom = 'none'
  contactButton.style.borderBottom = 'none'
})
menuButton.addEventListener('click', () => {
  display.innerHTML = displayPage('menu')
  aboutButton.style.borderBottom = 'none'
  menuButton.style.borderBottom = '3px solid white'
  contactButton.style.borderBottom = 'none'
})
contactButton.addEventListener('click', () => {
  display.innerHTML = displayPage('contact')
  aboutButton.style.borderBottom = 'none'
  menuButton.style.borderBottom = 'none'
  contactButton.style.borderBottom = '3px solid white'
})

display.innerHTML = displayPage('about')
aboutButton.style.borderBottom = '3px solid white'

import { about } from './about.js'
import { menu } from './menu.js'
import { contact } from './contact'

const displayPage = (page) => {
  if (page === 'about') {
    return about.innerHTML
  } else if (page === 'menu') {
    return menu.innerHTML
  } else {
    return contact.innerHTML
  }
}

export { displayPage }

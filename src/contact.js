const contact = document.createElement('main')

const title = document.createElement('h2')
title.innerHTML = 'Contact Information'
const text = document.createElement('p')
text.innerHTML = 'Phone Number: 0201234567'
const address = document.createElement('p')
address.innerHTML = 'Address: Generic Street 51, Antlantis'

contact.appendChild(title)
contact.appendChild(text)
contact.appendChild(address)

export { contact }

const about = document.createElement('main')

const title = document.createElement('h2')
title.innerHTML = 'About Us'
const text = document.createElement('p')
text.innerHTML = 'The place to go, if you want fast and delicious meals at a reasonable price. We use fresh ingredients and update our menu regularly depending on the season. Come by to enjoy a fantastic lunch or dinner, or order online and we\'ll have it delivered to you in no time. '
text.setAttribute('id', 'aboutText')
const image = document.createElement('img')
image.setAttribute('src', '/img/food.jpg')
image.setAttribute('id', 'aboutImage')
image.style.maxWidth = '400px'
image.style.textAlign = 'center'
about.appendChild(title)
about.appendChild(text)
about.appendChild(image)

export { about }

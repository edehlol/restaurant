const menu = document.createElement('main')
const title = document.createElement('h2')
title.innerHTML = 'Menu'

// Menu Item 1
const sectionOne = document.createElement('section')
const itemTitleOne = document.createElement('h3')
itemTitleOne.innerHTML = 'Siu Mai'
const itemDescrOne = document.createElement('p')
itemDescrOne.innerHTML = 'Steamed minced pork and chinese mushroom dumplings. Four pieces'
const itemPriceOne = document.createElement('p')
itemPriceOne.setAttribute('class', 'price')
itemPriceOne.innerHTML = '€ 6,75'

sectionOne.appendChild(itemTitleOne)
sectionOne.appendChild(itemDescrOne)
sectionOne.appendChild(itemPriceOne)

// Menu Item 2

const sectionTwo = document.createElement('section')
const itemTitleTwo = document.createElement('h3')
itemTitleTwo.innerHTML = 'Mama\'s fried chicken'
const itemDescrTwo = document.createElement('p')
itemDescrTwo.innerHTML = 'Chicken wings after moms secret recipe'
const itemPriceTwo = document.createElement('p')
itemPriceTwo.setAttribute('class', 'price')
itemPriceTwo.innerHTML = '€ 7,50'

sectionTwo.appendChild(itemTitleTwo)
sectionTwo.appendChild(itemDescrTwo)
sectionTwo.appendChild(itemPriceTwo)

// Menu Item 3

const sectionThree = document.createElement('section')
const itemTitleThree = document.createElement('h3')
itemTitleThree.innerHTML = 'Chinese springroll'
const itemDescrThree = document.createElement('p')
itemDescrThree.innerHTML = 'Spring rolls with fresh vegetables and roasted pork. 2 pieces'
const itemPriceThree = document.createElement('p')
itemPriceThree.setAttribute('class', 'price')
itemPriceThree.innerHTML = '€ 6,75'

sectionThree.appendChild(itemTitleThree)
sectionThree.appendChild(itemDescrThree)
sectionThree.appendChild(itemPriceThree)

menu.appendChild(title)
menu.appendChild(sectionOne)
menu.appendChild(sectionTwo)
menu.appendChild(sectionThree)

export { menu }

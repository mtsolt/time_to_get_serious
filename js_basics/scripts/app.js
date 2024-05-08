function init() {
  console.log('JS connected')



const button = document.getElementById('button1')
const body = document.querySelector('body')

// Creating the new element here doesn't work.
// let newBox = document.createElement('p')
// newBox.innerText = 'Clicked'
// newBox.style.color = 'white'
// This is because when creating the p outside the function, that p is the same node, and you cannot add the same node to a parent
// multiple times.
function buttonClick() {
  // However having it inside the function does. Because each time the function is called it will create a new 
  let newBox = document.createElement('p')
  newBox.innerText = 'Clicked'
  newBox.style.color = 'white'
  body.appendChild(newBox)
}
button.addEventListener('click', buttonClick)

} 





window.addEventListener('DOMContentLoaded', init)
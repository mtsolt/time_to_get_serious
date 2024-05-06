function init() {
  console.log('JS connected')



const button = document.getElementById('button1')
const body = document.querySelector('body')
const newBox = document.createElement('newBox')
newBox.innerText = 'Clicked'
newBox.style.color = 'white'


function buttonClick() {
  body.appendChild(newBox)
}
button.addEventListener('click', buttonClick)

} 





window.addEventListener('DOMContentLoaded', init)
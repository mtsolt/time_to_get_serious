function init() {
  console.log('JS connected')



const button = document.getElementById('button1')
const body = document.querySelector('body')



function buttonClick() {
  let newBox = document.createElement('p')
  newBox.innerText = 'Clicked'
  newBox.style.color = 'white'
  body.appendChild(newBox)
}
button.addEventListener('click', buttonClick)

} 





window.addEventListener('DOMContentLoaded', init)
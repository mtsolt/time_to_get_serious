function init() {
  console.log('JS connected')



const button = document.getElementById('button1')
const body = document.querySelector('body')
let counter = 0
// Creating the new element here doesn't work.
// let newBox = document.createElement('p')
// newBox.innerText = 'Clicked'
// newBox.style.color = 'white'
// This is because when creating the p outside the function, that p is the same node, and you cannot add the same node to a parent
// multiple times.




function buttonClick() {
  counter++
  // However having it inside the function does. Because each time the function is called it will create a new node.
  let newPara = document.createElement('p')
  newPara.innerText = 'Clicked'
  newPara.style.color = 'white'
  newPara.id = `p${counter}`
  body.appendChild(newPara)
  paraGraphColor()

}



function paraGraphColor() {
  
  let multiElements =  document.querySelectorAll('p')
  console.log(multiElements)
  console.log(counter)
  let lastElement = multiElements[counter]
  console.log(lastElement)
  // lastElement.id = `p ${multiElements[multiElements.length-1]} `
  // console.log(`Here's my answer ${multiElements[multiElements.length-1]}`)
  


  // for (let i = 0 ; i<multiElements.length ; i++ )

  // multiElements.style.`${nth-Child(odd)}`.backgroundColor =' white'
  
}







button.addEventListener('click', buttonClick)
} 

window.addEventListener('DOMContentLoaded', init)
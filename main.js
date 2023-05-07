const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const contact = document.querySelector('#contact')
const ul = document.querySelector('ul')
const pro = document.querySelector('#pro')
const noob = document.querySelector('#noob')
const card = document.querySelector('#card')
// const text = document.querbtn1ySelector('text')


function saveTodo(e){
    e.preventDefault()
    let Li = document.createElement('li')
    let newLi = document.createElement('li')
    let textli =document.createElement('li')
    
    newLi.innerText =  name.value

    Li.innerText = email.value
    textli .innerText = contact.value
    
    newLi.className = "list-group-item rounded-0"
    let newBtn = document.createElement('button')
    newBtn.innerText = "Contact"
    newBtn.className = "btn btn-success btn-sm rounded-0 "
    newBtn.style.marginBottom = "10px"
    ul.style.listStyle ='none'
    ul.appendChild(newLi)
    pro.appendChild(Li)
    noob.appendChild(textli)
    card.appendChild(newBtn)
    form.reset()

}



form.addEventListener('submit' , saveTodo)
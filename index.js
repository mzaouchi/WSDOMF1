// var titre = document.getElementsByTagName('h1')
// console.log(titre)
// console.log(titre[0])
// titre[1].style.color = "red"

// var par = document.getElementsByClassName('para')
// console.log(par)

// var divM = document.getElementById('main')
// console.log(divM)

// var titre = document.querySelector('h1')
// console.log(titre)
// var par = document.querySelector('.para')
// console.log(par)
// var pars = document.querySelectorAll('.para')
// console.log(pars)

// var divM = document.querySelector('#main')
// console.log(divM.innerHTML)
// console.log(divM.innerText)

// var divM = document.querySelector('#main')
// console.log(divM.firstElementChild)
// console.log(divM.lastElementChild)
// console.log(divM.firstElementChild.nextElementSibling.nextElementSibling.innerText)
// console.log(divM.lastElementChild.previousElementSibling.previousElementSibling.innerHTML)

// var par = document.querySelector('.para')
// console.log(par.parentElement)

// var divM = document.querySelector('#main')
// var x = document.createElement('button')
// var par = document.querySelector('.para')
// x.innerText = 'Ghazi'
// x.setAttribute('class','ghazi')
// divM.appendChild(x)
// divM.insertBefore(x,par)
// divM.replaceChild(x,par)
// par.parentElement.remove()
// divM.firstElementChild.appendChild(x)

function Alert(){
    alert('Hello Amine')
}

// var btnP = document.querySelector('.plus')

// btnP.addEventListener('click',function(){
//      btnP.previousElementSibling.innerText++
// })


// var btnM = document.querySelector('.moin')

// btnM.addEventListener('click',function(){
//     if(btnM.nextElementSibling.innerText>0){
//         btnM.nextElementSibling.innerText--
//     }
// })


var btnsP = document.querySelectorAll('.plus')

for(let i = 0; i<btnsP.length;i++){
    btnsP[i].addEventListener('click',function(){
        btnsP[i].previousElementSibling.innerText++
    })
}





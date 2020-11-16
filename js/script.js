const add=document.querySelectorAll(".add")
const subtract=document.querySelectorAll(".subtract") 
var total = document.querySelector('.total')
var font= document.querySelectorAll('.fa-heart-o ')
const font2=document.querySelectorAll('.fa-close')
let somme=0



Array.from(font2).map((el)=>{
    el.addEventListener('click',()=>{
        el.parentElement.parentElement.remove()
        somme= somme-(el.previousElementSibling.previousElementSibling.previousElementSibling.value*parseInt(el.parentElement.nextElementSibling.innerHTML))
        total.innerHTML= somme+"$"
    })
})


Array.from(add).map((el)=>{
    el.addEventListener('click',()=>{
        el.nextElementSibling.value = parseInt(el.nextElementSibling.value) +1 ;
        somme=somme+parseInt(el.parentElement.nextElementSibling.innerHTML)
        total.innerHTML= somme+"$"
        
    })})

Array.from(subtract).map((el)=>{
    el.addEventListener('click' ,()=>{
        if( el.previousElementSibling.value > 0){
        el.previousElementSibling.value= parseInt(el.previousElementSibling.value)-1
        somme=somme-parseInt(el.parentElement.nextElementSibling.innerHTML)
        total.innerHTML= somme +"$"
    }
        
    })

})

Array.from(font).map((el)=>{
    el.addEventListener('click', ()=>
    el.classList.toggle("red")
    )
})

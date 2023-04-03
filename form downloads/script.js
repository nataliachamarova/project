
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".header__burger-btn").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
})

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".header__btn").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open__btn")
    })
})

// $('input').on('keydown', function(e){
//     if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
//         return false;
//     };
//     })


const element = document.querySelector('.js__choice');
const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText:""
})


const element1 = document.querySelector('.js__choice1');
const choices1 = new Choices(element1,{
    searchEnabled: false,
    itemSelectText:""
})

const element2 = document.querySelector('.js__choice2');
const choices2 = new Choices(element2,{
    searchEnabled: false,
    itemSelectText:""
})

const element3 = document.querySelector('.js__choice3');
const choices3 = new Choices(element3,{
    searchEnabled: false,
    itemSelectText:""
})

const element4 = document.querySelector('.js__choice4');
const choices4 = new Choices(element4,{
    searchEnabled: false,
    itemSelectText:""
})

const element5 = document.querySelector('.js__choice5');
const choices5 = new Choices(element5,{
    searchEnabled: false,
    itemSelectText:""
})



const inputs = document.getElementById('first__time-input'); 

inputs.addEventListener('input', (event) => { 

    const inputValueLength = event.target.value.length; 
  
    const maxLength = event.target.maxLength; 
   
    if (inputValueLength == maxLength) { 

    const nextInput = document.getElementById('second__time-input'); 
    console.log(nextInput)
    if (nextInput) { 

        nextInput.focus(); 

    }

    }

});















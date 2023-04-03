
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

const prev = document.getElementById('btn-prev'),
next = document.getElementById('btn-next'),
slides = document.querySelectorAll('.table-сontent-mob')


let index = 0; 

const activeSlide = n => {
for(slide of slides){
slide.classList.remove('active') 
}
slides[n].classList.add('active');
}




const prepareCurrentSlide = ind =>{
activeSlide(index);

}



const nextSlide = () => {
if(index == slides.length - 1){
index = 0;
prepareCurrentSlide(index);
}else{
index++;
prepareCurrentSlide(index);
}

}

const prevSlide = () => {
if(index == 0){
index = slides.length - 1;
prepareCurrentSlide(index);
}else{
index--;
prepareCurrentSlide(index);
}
} 



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



// активные классы
// .header__burger-btn
// .header
// .header__btn
// .btn-prev
// .btn-next
// .table-сontent-mob
// .table__btn
// .header__nav







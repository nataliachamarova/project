const swiper = new Swiper('.swiper-container', {
        // slidesPerView: 1,
        loop: true,
        // spaceBetween: 30,


    // пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
       
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
        a11y: {    paginationBulletMessage: 'Перейти к слайду {{index}}', 
    }
    });

    // табы
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.list-buttons__btn').forEach(function(listonButtonBtn){
        listonButtonBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.list-buttons__btn').forEach(function(btn){
                btn.classList.remove('list-buttons__btn_active')
            })
            event.currentTarget.classList.add('list-buttons__btn_active')

            document.querySelectorAll('.projects__info').forEach(function(listonButtonBtn) {
                listonButtonBtn.classList.remove('card-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('card-active')
        })
    })

    // форма поиска
    document.getElementById('search-form-open').addEventListener('click', function(event){
        document.getElementById('search-form').classList.add('search-form__active')
    })
    document.getElementById('search-form-close').addEventListener('click', function(event){
       document.getElementById('search-form').classList.remove('search-form__active')
    })
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault()  
    })

    // бургер
    $('.burger').on('click',function(e){
        $(this).toggleClass('burger-active');
        $('.burger-menu').toggleClass('burger-menu-active');
    })
})

// аккордеон
$(".accordion").accordion();
$(".accordion").accordion({
    icons: false,
    collapsible: true,
    active: false,
});

// форма поиска
// document.addEventListener('DOMContentLoaded', (e) )

// }

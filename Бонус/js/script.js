const element = document.querySelector('.selectCustom');

const choices = new Choices(element, {
    searchEnabled : false,
    itemSelectText: ""
})

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185073737896,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });
    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [48.872185073737896,2.354223999999991] // координаты точки
    //     }
    // });


        var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map.svg',
            iconImageSize: [28, 40],
            iconImageOffset: [-14, -40]
        });
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);         
    myMap.geoObjects.add(myPlacemark);
}

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.form', {

    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 15

        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true,
        }

    },
   
    messages: {
            name: {
            required: 'Поле обязательно для заполнения',
            minLength: 'Длина должна быть менее 2-х символов' ,
            maxLength: 'Длина должна быть не более 15-и символов',
            
        },

        tel: {
            required: 'Поле обязательно для заполнения',
            function: 'Введите не менее 10 цифр'
        },

        mail: {
            required: 'Поле обязательно для заполнения',
            email: 'Пожалуйста, введите действительный адрес электронной почты',
        }
    },
});
 


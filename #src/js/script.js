let Slides = [],
Dotted = [],
ordCounter = 1,
ordCenter = 2;

// получаем список слайдов
let allSlideList = document.getElementsByClassName("stock__slide");
// массив слайдов
let allSlide = Array.from(allSlideList);

// функция добавляет id к слайдам и точкам
function counterSlide() {

    // добавляем id к слайдам
    for (let i=0;i<allSlide.length;i++) {
    let stock = 'stock';
    allSlide[i].id = stock + [i];
    //добавляем order к слайдам
    allSlide[i].style.order = ordCounter;
    ordCounter++;
    // записываем слайды в массив
    Slides.push(allSlide[i]);
    };

    // получаем список точек
    let allDottedList = document.getElementsByClassName("dot");
    // массив точек
    let allDotted = Array.from(allDottedList);
    // добавляем id к точкам
    for (let i=0;i<allDotted.length;i++) {
    let dot = 'dot';
    allDotted[i].id = dot + [i];
    // записываем точки в массив
    Dotted.push(allDotted[i]);
    };
}
counterSlide()


// функция удаления/добавления active и order у слайдов/точек
function clickSlide() {
    document.querySelector('#dot_contain').addEventListener('click', function(e){ // Вешаем обработчик клика на dot_contain
        // если кликать по пустому месту
    if (Dotted.indexOf(e.target) === -1) {
        console.log("пустое место");
    } else {
        let chosenDot = e.target; // точка по которой кликнули
        let indexDot = Dotted.indexOf(chosenDot); // индекс точки по которой кликнули
   
        // удаляем классы active у точек и слайдов
        for (let i=0;i<Dotted.length;i++) {
            Slides[i].classList.remove("stock__slide-active");
            Dotted[i].classList.remove("dot_active");
        }
        // добавляем классы active у точек и слайдов по которым кликнули
        Slides[indexDot].classList.add("stock__slide-active");
        Dotted[indexDot].classList.add("dot_active");
    
        // записываем значение order нужного слайда
        let oldOrder = Slides[indexDot].style.order;
    
        // ищем средний слайд и меняем их order местами
        for (let a=0;a<Dotted.length;a++) {
            if (Slides[a].style.order == 2) {
                Slides[a].style.order = oldOrder;
                Slides[indexDot].style.order = 2;
            }
        }
        // функция скрытия "лишних" слайдов
        hideSlide()
    }

});
}
clickSlide()

console.log(Slides);

// функция скрытия "лишних" слайдов
function hideSlide() {
    //перебираем слайды
    for (i=0;i<Slides.length;i++) {
        // если значение order больше 3, то скрываем слайд
        if(Slides[i].style.order > 3) {
            Slides[i].style.display = 'none';
        } else {
            Slides[i].style.display = ''; 
        }
    }
}
hideSlide()


///////////////////////////////////////////////////////////////////////
let allOptionService = document.getElementsByClassName("online-record-option");
let optionService = Array.from(allOptionService);
let optionsWrap = document.getElementsByClassName("online-record-options");
let buttonService = document.getElementById("online-record-service");

function idForService() {
    for (let i=0;i<optionService.length;i++) {
        optionService[i].id = 'service' + i;
    }
}
idForService()

// функция клика по услугам
function clickService() {
    buttonService.addEventListener('click', function(e){ // Вешаем обработчик клика на online-record-service
        // добавляем класс active
        optionsWrap[0].classList.add("online-record-options-active");
        // убираем border
        buttonService.style.borderRadius = '20px 20px 0 0';
    });

    window.addEventListener('click', checkClick);
    // функция скрытия услуг при клике за ее пределами
    function checkClick(e) {
        // если клик по данным классам, то ничего не делать
        if (e.target.matches('.online-record-select, .online-record-option, .online-record-options, .online-record-options-active')) {
            selectService(e)
            console.log('Клик по активному');

        } else {
            // если кликнули не по услугам, то удаляем класс active и возвращаем border
            optionsWrap[0].classList.remove("online-record-options-active");
            buttonService.style.borderRadius = '20px';
            console.log('всё другое');
        }
    }
    
}
clickService()

// функция прибавения класса active к услуге

function selectService(e) {
    if (e.target.matches('.online-record-option')) {
        console.log('кликнули по услуге')
        let idActive = e.target.id;
        for (let i=0;i<optionService;i++) {
            console.log('удалили классы');
            optionService[i].classList.remove('online-record-option-active');
            e.classList.add('online-record-option-active')
            
        }
        console.log(idActive)
    }
}



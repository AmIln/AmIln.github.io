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
        //var id = e.target.id; 
        console.log("определили точку " + chosenDot + "ёё индекс " + indexDot);
    
        // удаляем классы active у точек и слайдов
        for (let i=0;i<Dotted.length;i++) {
            Slides[i].classList.remove("stock__slide-active");
            Dotted[i].classList.remove("dot_active");
            console.log("удалили класс у слайда/точки");
        }
        // добавляем классы active у точек и слайдов по которым кликнули
        Slides[indexDot].classList.add("stock__slide-active");
        Dotted[indexDot].classList.add("dot_active");
        console.log("добавили класс у нужного слайда/точки")
    
        // меняем местами активные и неактивные слайды
        console.log("выводим значение ордера")
        console.log(Slides[indexDot].style.order);
    
        // записываем значение order нужного слайда
        let oldOrder = Slides[indexDot].style.order;
        console.log("значение order нужного слайда " + oldOrder)
    
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
            console.log('order больше у элемента ' + Slides[i]);
            Slides[i].style.display = 'none';
        } else {
            console.log('order в норме ' + Slides[i])
            Slides[i].style.display = ''; 
        }
    }
}
hideSlide()
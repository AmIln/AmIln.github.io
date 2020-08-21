//// КОЛОНКИ С КОРМОМ
let cat_foie_gras = document.getElementById('cats_food_foie_gras');
let cat_fish = document.getElementById('cats_food_fish');
let cat_chicken = document.getElementById('cats_food_chicken');


//// ТЕКСТЫ
// текст фуа-гра
let default_foie_gras = 'Чего сидишь? Порадуй котэ, <a href="#" class="link_by" id="default_foie_gras" onclick="link_foie_gras()">купи.</a>';
let selected_foie_gras = 'Печень утки разварная с артишоками.';
let ended_foie_gras = 'Печалька, с фуа-гра закончился.';
// текст fish
let default_fish = 'Чего сидишь? Порадуй котэ, <a href="#" class="link_by" id="default_fish" onclick="link_fish()">купи.</a>';
let selected_fish = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
let ended_fish = 'Печалька, с рыбой закончился';
// текст chicken
let default_chicken = 'Чего сидишь? Порадуй котэ, <a href="#" class="link_by" id="default_chicken" onclick="link_chicken()">купи.</a>';
let selected_chicken = 'Филе из цыплят с трюфелями в бульоне.';
let ended_chicken = 'Печалька, с курой закончился';


//// TITLE_FOOTER
// foie_gras
let text_cat1 = document.getElementById('cat1');
// fish
let text_cat2 = document.getElementById('cat2');
// chicken
let text_cat3 = document.getElementById('cat3');


//// ССЫЛКИ КОРМА
// foie_gras
let link_cat1 = document.getElementById('default_foie_gras');
// fish
let link_cat2 = document.getElementById('default_fish');
// chicken
let link_cat3 = document.getElementById('default_chicken');

//// КОЛИЧЕСТВО КОРМА (начало отсчета)
// foie_gras
let quantity_foie_gras = 0;
// fish
let quantity_fish = 0;
// chicken
let quantity_chicken = 0;


// ФОН ПОВЕРХ КОРМА
// foie_gras
let display_foie_gras_off = document.getElementById('display_foie_gras_off');



//// (клик на картинку) Выбрать корм / Отменить выбор 
// foie_gras 
cat_foie_gras.onclick = function() { 
    quantity_foie_gras++;
    let balance_foie_gras = 10 - quantity_foie_gras;
    console.log('С фуа-гра осталось: ' + balance_foie_gras );
    if (quantity_foie_gras >= 10) {
        cat_foie_gras.classList.remove('selected_food');
        cat_foie_gras.classList.remove('default_cats_food');
        cat_foie_gras.classList.add('ended_food');
        text_cat1.innerHTML = ended_foie_gras;
        text_cat1.classList.add('text_ended');
        display_foie_gras_off.style.display = "flex";
    } else {
        cat_foie_gras.classList.toggle('selected_food');
        cat_foie_gras.classList.toggle('default_cats_food');
    }  
}
// fish 
cat_fish.onclick = function() {
    quantity_fish++;
    let balance_fish = 5 - quantity_fish;
    console.log('С рыбой осталось: ' + balance_fish);
    if (quantity_fish >= 5) {
        cat_fish.classList.remove('selected_food');
        cat_fish.classList.remove('default_cats_food');
        cat_fish.classList.add('ended_food');
        text_cat2.innerHTML = ended_fish;
        text_cat2.classList.add('text_ended');
        display_fish_off.style.display = "flex";
    } else {
        cat_fish.classList.toggle('selected_food');
        cat_fish.classList.toggle('default_cats_food');
    }  
}
// chicken 
cat_chicken.onclick = function() {
    quantity_chicken++;
    let balance_chicken = 2 - quantity_chicken;
    console.log('С курицей осталось: ' + balance_chicken);
    if (quantity_chicken >= 2) {
        cat_chicken.classList.remove('selected_food');
        cat_chicken.classList.remove('default_cats_food');
        cat_chicken.classList.add('ended_food');
        text_cat3.innerHTML = ended_chicken;
        text_cat3.classList.add('text_ended');
        display_chicken_off.style.display = "flex";
    } else {
        cat_chicken.classList.toggle('selected_food');
        cat_chicken.classList.toggle('default_cats_food');
    }
}


//// Изменение title_footer
// foie_gras 
cat_foie_gras.addEventListener("click", function(event) {
    event.preventDefault();
    if (cat_foie_gras.classList.contains('ended_food')) {
        text_cat1.innerHTML = ended_foie_gras;
    }
    else if (cat_foie_gras.classList.contains('selected_food')) {
        text_cat1.innerHTML = selected_foie_gras;
    } else {
        text_cat1.innerHTML = default_foie_gras;
    }
});
// fish 
cat_fish.addEventListener("click", function(event) {
    event.preventDefault();
    if (cat_fish.classList.contains('ended_food')) {
        text_cat2.innerHTML = ended_fish;
    }
    else if (cat_fish.classList.contains('selected_food')) {
        text_cat2.innerHTML = selected_fish;
    } else {
        text_cat2.innerHTML = default_fish;
    }
});
// chicken 
cat_chicken.addEventListener("click", function(event) {
    event.preventDefault();
    if (cat_chicken.classList.contains('ended_food')) {
        text_cat3.innerHTML = ended_chicken;
    }
    else if (cat_chicken.classList.contains('selected_food')) {
        text_cat3.innerHTML = selected_chicken;
    } else {
        text_cat3.innerHTML = default_chicken;
    }
});


//// Выбрать корм по ссылке
// foie_gras
function link_foie_gras () {
    quantity_foie_gras++;
    cat_foie_gras.classList.toggle('selected_food');
    let balance_foie_gras = 10 - quantity_foie_gras; 
    console.log('С фуа-гра осталось: ' + balance_foie_gras);
    if (cat_foie_gras.classList.contains('selected_food')) {
        text_cat1.innerHTML = selected_foie_gras;
    } else {
        text_cat1.innerHTML = default_foie_gras;
    }
};
// fish
function link_fish () {
    quantity_fish++;
    cat_fish.classList.toggle('selected_food');
    let balance_fish = 5 - quantity_fish; 
    console.log('С рыбой осталось: ' + balance_fish);
    if (cat_fish.classList.contains('selected_food')) {
        text_cat2.innerHTML = selected_fish;
    } else {
        text_cat2.innerHTML = default_fish;
    }
};
// chicken
function link_chicken () {
    quantity_chicken++;
    cat_chicken.classList.toggle('selected_food');
    let balance_chicken = 2 - quantity_chicken; 
    console.log('С курицей осталось: ' + balance_chicken);
    if (cat_chicken.classList.contains('selected_food')) {
        text_cat3.innerHTML = selected_chicken;
    } else {
        text_cat3.innerHTML = default_chicken;
    }
};

// Части тела
const Head = {
    name: 'Голова',
    max_hp: 35,
    bleeding: false,
    fracture: false,
    zero_hp: false,
    css_name: 'HumanBody-Limb_head',
    div_id: 'Head_id'
}
let Head_HP = 35;
const Head_div = document.getElementById('Head_id');
let Head_PercentGradient = 100;


const Body = {
    name: 'Грудь',
    max_hp: 85,
    bleeding: false,
    fracture: false,
    zero_hp: false,
    css_name: 'HumanBody-Limb_cheast',
    div_id: 'Cheast_id'
}
let Body_HP = 85;
const Body_div = document.getElementById('Cheast_id');
let Body_PercentGradient = 100;


const Stomach = {
    name: 'Живот',
    max_hp: 70,
    bleeding: false,
    fracture: false,
    zero_hp: true,
    css_name: 'HumanBody-Limb_stomach',
    div_id: 'Stomach_id'
}
let Stomach_HP = 70;
const Stomach_div = document.getElementById('Stomach_id');
let Stomach_PercentGradient = 100;


const LeftHand = {
    name: 'Левая рука',
    max_hp: 60,
    bleeding: true,
    fracture: true,
    zero_hp: true,
    css_name: 'HumanBody-Limb_leftHand',
    div_id: 'LeftHand_id'
  }
let LeftHand_HP = 60;
const LeftHand_div = document.getElementById('LeftHand_id');
let LeftHand_PercentGradient = 100;


const RightHand = {
    name: 'Правая рука',
    max_hp: 60,
    bleeding: true,
    fracture: true,
    zero_hp: true,
    css_name: 'HumanBody-Limb_rightHand',
    div_id: 'RightHand_id'
  }
let RightHand_HP = 60;
const RightHand_div = document.getElementById('RightHand_id');
let RightHand_PercentGradient = 100;


const LeftLeg = {
    name: 'Левая нога',
    max_hp: 65,
    bleeding: true,
    fracture: true,
    zero_hp: true,
    css_name: 'HumanBody-Limb_leftLeg',
    div_id: 'LeftLeg_id'
  }
let LeftLeg_HP = 65;
const LeftLeg_div = document.getElementById('LeftLeg_id');
let LeftLeg_PercentGradient = 100;


const RightLeg = {
    name: 'Правая нога',
    max_hp: 65,
    bleeding: true,
    fracture: true,
    zero_hp: true,
    css_name: 'HumanBody-Limb_rightLeg',
    div_id: 'RightLeg_id'
  }
let RightLeg_HP = 65;
const RightLeg_div = document.getElementById('RightLeg_id');
let RightLeg_PercentGradient = 100;

//-----------------------------------------------------------------------------------------

//кнопки
const DamageButton = document.getElementById('DamageButton_id');
const HealButton = document.getElementById('HealButton_id');

//массив частей тела
const HumanBody_array = [Head,Body,Stomach,LeftHand,RightHand,LeftLeg,RightLeg];

//массив названий частей тела
const NamePartsArray = ["Голова", "Грудь", "Живот", "Левая рука", "Правая рука", "Левая нога", "Правая нога"];

//массив ХП
let HP_array = [Head_HP,Body_HP,Stomach_HP,LeftHand_HP,RightHand_HP,LeftLeg_HP,RightLeg_HP];

//массив id дивов
const div_array = [Head_div,Body_div,Stomach_div,LeftHand_div,RightHand_div,LeftLeg_div,RightLeg_div];

//массив цветов частей тела
let PercentGradient_array = [Head_PercentGradient,Body_PercentGradient,Stomach_PercentGradient,LeftHand_PercentGradient,RightHand_PercentGradient,LeftLeg_PercentGradient,RightLeg_PercentGradient];

//-----------------------------------------------------------------------------------------

// аптечки

const AI2 = {
    id: 'AI2_id',
    max_point: 100,
    max_heal: 50,
    bleeding_heal: false,
    bleeding_str_heal: false,
    fracture_heal: false
}

const Avto = {
    id: 'Avto_id',
    max_point: 220,
    max_heal: 70,
    bleeding_heal: true,
    bleeding_str_heal: false,
    fracture_heal: false
}

const Salewa = {
    id: 'IFAK_id',
    max_point: 400,
    max_heal: 50,
    bleeding_heal: true,
    fracture_heal: false
}

const IFAK = {
    id: 'Salewa_id',
    max_point: 300,
    max_heal: 85,
    bleeding_heal: true,
    bleeding_str_heal: true,
    fracture_heal: false
}

const AFAK = {
    id: 'AFAK_id',
    max_point: 400,
    max_heal: 60,
    bleeding_heal: true,
    bleeding_str_heal: true,
    fracture_heal: false
}

const Grizzly = {
    id: 'Grizzly_id',
    max_point: 1800,
    max_heal: 175,
    bleeding_heal: true,
    bleeding_str_heal: true,
    fracture_heal: true
}

//массив аптечек
const FAKs_array = [AI2,Avto,Salewa,IFAK,AFAK,Grizzly];

//-----------------------------------------------------------------------------------------

//массив проблем
let Troubles = [];
//отсортированный массив проблем
let Troubles_sort = [];

// Массив всех рандомных частей тела
let RandomWounds = [];
// ОТСОРТИРОВАННЫЙ массив частей тела
let NameDamageParts = [];

// сумма лечения
let HealSum = 0;


 // Функция рандомного урона / (выбора частей тела)
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

// функция перебирает все дивы и вставляет в них CSS и HTML
function calc_percent() {
    for (let i=0;i<=div_array.length -1;i++) {
        percent_gradient(div_array[i],PercentGradient_array[i],color(PercentGradient_array[i]));
        div_array[i].innerHTML = HP_array[i] + '/' + HumanBody_array[i].max_hp;
    }
}
calc_percent();

// функция добавляющая СSS стиль
function percent_gradient(part, percent, color) {
    part.setAttribute("style", "background: linear-gradient(to right, #" + color + " " + percent + "%, #010102 " + percent + "%);");  
}


// функция определения цвета
function color(percent) {
    let color_now = '19b43b';
    if (percent > 50) {
        return color_now
    } else if (percent < 50 && percent > 20) {
        color_now = 'cbce10';
        return color_now
    } else {
        color_now = 'a51e0c';
        return color_now
    }
}

// Вычисляется количество частей (часть 2)
let quantity_part = 0;
function part_selection() {
    quantity_part = randomInteger(1,7)
}

// определяет какие части получат урон
function which_parts() {
    for(let i = 0; i < quantity_part;i++) {
        let part_now = randomInteger(1,7) - 1;
        damage_part(part_now);
    }
    unique(RandomWounds);
}

// записывает в random_wounds все рандомные части тела
function damage_part(b) {
    RandomWounds.push(NamePartsArray[b]);
}

// функция сортировки масива
function unique(arr) {
    for (let str of arr) {
        if (!NameDamageParts.includes(str)) {
            NameDamageParts.push(str);
        }
    }
}




function DAMAGE() {
    part_selection()
    which_parts()
    for (let i=0; i<=NameDamageParts.length -1;i++) {
        for (let b=0;b<=6;b++) {
            if (NameDamageParts[i] === HumanBody_array[b].name) {
                HP_array[b] = randomInteger(1,HumanBody_array[b].max_hp);
                //Свич для того, чтобы отобразить урон раненым конечностям,дать им градиенты и кровотечение
                switch(NameDamageParts[i]) {
                    case 'Голова':
                        Head_HP = HP_array[b];
                        PercentGradient_array[0] = Math.round((Head_HP / HumanBody_array[b].max_hp) * 100);
                        head_percent_gradient = Math.round((Head_HP / HumanBody_array[b].max_hp) * 100);
                        break;
                    case 'Грудь':
                        body_hp_now = HP_array[b];
                        PercentGradient_array[1] = Math.round((body_hp_now / HumanBody_array[b].max_hp) * 100);
                        break;
                    case 'Живот':
                        stomach_hp_now = HP_array[b];
                        PercentGradient_array[2] = Math.round((stomach_hp_now / HumanBody_array[b].max_hp) * 100);
                        break;
                    case 'Левая рука':
                        left_hand_hp_now = HP_array[b];
                        PercentGradient_array[3] = Math.round((left_hand_hp_now / HumanBody_array[b].max_hp) * 100);
                        if (Math.round((left_hand_hp_now / HumanBody_array[b].max_hp) * 100))
                        bleedings(LeftHand_div)
                        break;
                    case 'Правая рука':
                        right_hand_hp_now = HP_array[b];
                        PercentGradient_array[4] = Math.round((right_hand_hp_now / HumanBody_array[b].max_hp) * 100);
                        bleedings(RightHand_div)
                        break;
                    case 'Левая нога':
                        left_leg_hp_now = HP_array[b];
                        PercentGradient_array[5] = Math.round((left_leg_hp_now / HumanBody_array[b].max_hp) * 100);
                        bleedings(LeftLeg_div)
                        break;
                    case 'Правая нога':
                        right_leg_hp_now = HP_array[b];
                        PercentGradient_array[6] = Math.round((right_leg_hp_now / HumanBody_array[b].max_hp) * 100);
                        bleedings(RightLeg_div)
                        break;
                    default:
                        //нет дмг
                }
            }
        }    
    }
}

//рандом бля кровотечений
function bleedings(part) {
    let randomchek = Math.random()
    if (randomchek < 0.2) {
        //тяжелое + легкое
        part.className += " DoubleBleeding_true";
        part.className += " BleedingStrong_true";
    } else if (randomchek < 0.3) {
        //легкое кровотечение
        part.className += " Bleeding_true";
    } else if (randomchek < 0.6) {
        //тяжелое кровотечение
        part.className += " BleedingStrong_true";
    }   
}
// удаляет кровотечения
function reverse_bleeding() {
    const limbs = [LeftHand_div,RightHand_div,LeftLeg_div,RightLeg_div]
    for (let i=0;i<limbs.length;i++) {
        limbs[i].classList.remove('BleedingStrong_true', 'Bleeding_true', 'DoubleBleeding_true')
    }
}

// НАНЕСТИ УРОН
DamageButton.onclick = function() {
    returnHP()
    NameDamageParts = [];
    reverse_bleeding()
    DAMAGE()
    random_wounds = [];
    calc_percent()
}

//возвращаем макс хп
function returnHP() {
    Head_HP = Head.max_hp;
    Body_HP = Body.max_hp;
    Stomach_HP = Stomach.max_hp;
    LeftHand_HP = LeftHand.max_hp;
    RightHand_HP = RightHand.max_hp;
    LeftLeg_HP = LeftLeg.max_hp;
    RightLeg_HP = RightLeg.max_hp;
    Troubles_sort = [];
    for (let i=0; i<=HP_array.length -1;i++) {
        HP_array[i] = HumanBody_array[i].max_hp;
        PercentGradient_array[i] = 100;
    }
}


// ОТСЛЕЖИВАНИЕ АКТИВНОЙ АПТЕЧКИ
// див с аптечками
let FAK_Container = document.getElementById('FirstAidKits_id');
// див аптечкИ
let FAKs = FAK_Container.getElementsByClassName('FirstAidKits-Fak');


// МЕНЯЕТ АКТИВНУЮ АПТЕЧКУ
for (let i=0;i<FAKs.length;i++) {
    FAKs[i].addEventListener('click', function() {
        let current = document.getElementsByClassName("FirstAidKits-Fak_activeFAK");
        current[0].className = current[0].className.replace("FirstAidKits-Fak_activeFAK", "");
        this.className += " FirstAidKits-Fak_activeFAK";
        let ActiveFAK = document.querySelector('.FirstAidKits-Fak_activeFAK');

        // если активная аптечка АИ2 то не отображать кровотечения в приоритетности
        if (ActiveFAK.id === 'AI2_id') {
            document.getElementById('Bleeding_id').style.display = 'none';
            document.getElementById('BleedingStrong_id').style.display = 'none';
            document.querySelector('.PriorityNumbers').children[5].style.display = 'none';
            document.querySelector('.PriorityNumbers').children[6].style.display = 'none';   
        } else if (ActiveFAK.id === 'Avto_id'){
            document.getElementById('BleedingStrong_id').style.display = 'none';
            document.querySelector('.PriorityNumbers').children[6].style.display = 'none';
            let bleeding_none =  document.getElementById('Bleeding_id').getAttribute('style') === 'display: none;';
            let number_none = document.querySelector('.PriorityNumbers').children[5].getAttribute('style') === 'display: none;';
            // проверка на дисплей "легкого кровотячения и номера 6" 
            if (bleeding_none && number_none) {
                document.getElementById('Bleeding_id').style.display = 'flex';
                document.querySelector('.PriorityNumbers').children[5].style.display = 'flex';
            }
        } else {
            document.getElementById('Bleeding_id').style.display = 'flex';
            document.getElementById('BleedingStrong_id').style.display = 'flex';
            document.querySelector('.PriorityNumbers').children[5].style.display = 'flex';
            document.querySelector('.PriorityNumbers').children[6].style.display = 'flex';
        }
    });
}


// контейнер с конечностями
const PartsContainer = document.querySelector('.PriorityParts');
// див конечностей
let Parts = PartsContainer.querySelectorAll('.PriorityParts-Part');


// grag and drop
for (const task of Parts) {
    task.draggable = true;
}

//реакция на начало "перетаскивания"
PartsContainer.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('drag-drop_true');
})

//реакция на конец "перетаскивания"
PartsContainer.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('drag-drop_true');
})


PartsContainer.addEventListener('dragover', (evt) => {
    evt.preventDefault();

    const activeElement = PartsContainer.querySelector('.drag-drop_true');

    const currentElement = evt.target;

    const isMoveable = activeElement !== currentElement && currentElement.classList.contains('PriorityParts-Part');

    if (!isMoveable) {
        return;
    }

    const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;

    PartsContainer.insertBefore(activeElement, nextElement);
});

// ПЕРЕВЯЗАТЬСЯ
HealButton.onclick = function() {
    priority_heal()
}

// массив приоритетности
let PriorityFinal_array = [];

// определение приоритетности
function priority_heal() {
    //массив всех конечностей
    const priority_array = Array.from(PartsContainer.querySelectorAll('.PriorityParts-Part'))
    PriorityFinal_array = [];
    for (let i=0;i<priority_array.length;i++) {
        //если присутствует атрибут стайл (значит, что аптечка не может это вылечить) 
        if (priority_array[i].getAttribute('style') === 'display: none;') {
            //не записываем этот элемент в новый массив
        } else {
            //записываем элемент в новый массив
            PriorityFinal_array.push(priority_array[i].textContent)
        }
    }
    gradual_heal(PriorityFinal_array)
}

function gradual_heal(arr) {
    //цикл который выявляет все проблемы(все раненые части тела и кровотечения)
    for(let i=0;i<div_array.length;i++) {
        if (div_array[i].classList.contains('DoubleBleeding_true') && div_array[i].classList.contains('BleedingStrong_true')) { // ТУТ ПРОБЛЕМА!!! (ВИДИТ ДВОЙНОЙ БЛИДИНГ И ВСТАВЛЯЕТ И ТЯЖЕЛОЕ И ЛЕГКОЕ КРОВОТЕЧЕНИЕ)
            Troubles.push('Тяжелое кровотечение')
            Troubles.push('Легкое кровотечение')
            if (HP_array[i] < HumanBody_array[i].max_hp) {
                Troubles.push(HumanBody_array[i].name) 
            }
        } else if (div_array[i].classList.contains('DoubleBleeding_true')) {
            Troubles.push('Легкое кровотечение')
            if (HP_array[i] < HumanBody_array[i].max_hp) {
                Troubles.push(HumanBody_array[i].name) 
            }
        } else if (div_array[i].classList.contains('Bleeding_true')) {
            // если у конечности есть легкое кровотечение то записываем это + саму конечность
            Troubles.push('Легкое кровотечение')
            if (HP_array[i] < HumanBody_array[i].max_hp) {
                Troubles.push(HumanBody_array[i].name) 
            }
        } else if (div_array[i].classList.contains('BleedingStrong_true')) {
            // если у конечности есть тяжелое кровотечение то записываем это + саму конечность
            Troubles.push('Тяжелое кровотечение')
            if (HP_array[i] < HumanBody_array[i].max_hp) {
                Troubles.push(HumanBody_array[i].name) 
            }
        } else {
            // записываем конечности без кровотечений
            if (HP_array[i] < HumanBody_array[i].max_hp) {
                Troubles.push(HumanBody_array[i].name) 
            }
        }
    }
    directly_healing(Troubles, PriorityFinal_array)
    Troubles = [];  
}

function directly_healing(trouble_arr, priority_arr) {
    let trouble_arr_heal = trouble_arr;
    Troubles_sort = [];
    // цикл, берем приоритет, ищем среди ран данную проблему, если нет то переходим к следующему приоритету
    for (let i=0;i<priority_arr.length;i++) {
        if (priority_arr[i] === 'Руки') {
            let left_hand_index = trouble_arr_heal.indexOf('Левая рука');
            let right_hand_index = trouble_arr_heal.indexOf('Правая рука');
            if (left_hand_index >= 0 && right_hand_index >= 0) {
                //обе руки
                if (left_hand_hp_now < right_hand_hp_now) {
                    Troubles_sort.push('Левая рука')
                    Troubles_sort.push('Правая рука')
                } else {
                    Troubles_sort.push('Правая рука')
                    Troubles_sort.push('Левая рука')
                }
                continue
            } else if (left_hand_index >= 0) {
                Troubles_sort.push('Левая рука')
            } else if (right_hand_index >= 0) {
                Troubles_sort.push('Правая рука')
            }
        } if (priority_arr[i] === 'Ноги') {
            let left_leg_index = trouble_arr_heal.indexOf('Левая нога');
            let right_leg_index = trouble_arr_heal.indexOf('Правая нога');
            if (left_leg_index >= 0 && right_leg_index >=0) {
                if (left_leg_hp_now < right_leg_hp_now) {
                    Troubles_sort.push('Левая нога')
                    Troubles_sort.push('Правая нога')
                } else {
                    Troubles_sort.push('Правая нога')
                    Troubles_sort.push('Левая нога')
                }
                continue
            } else if (left_leg_index >= 0) {
                Troubles_sort.push('Левая нога')
            } else if (right_leg_index >= 0) {
                Troubles_sort.push('Правая нога')
            } 
        } if (priority_arr[i] === 'Голова' && trouble_arr_heal.indexOf('Голова') >= 0) {
            Troubles_sort.push('Голова')
        } if (priority_arr[i] === 'Грудь' && trouble_arr_heal.indexOf('Грудь') >= 0) {
            Troubles_sort.push('Грудь')
        } if (priority_arr[i] === 'Живот' && trouble_arr_heal.indexOf('Живот') >= 0) {
            Troubles_sort.push('Живот')
        } if (priority_arr[i] === 'Тяжелое кровотечение') {
            let bleeding_str_arr = trouble_arr_heal.filter(el => el === 'Тяжелое кровотечение')
            if (bleeding_str_arr.length >= 1) {
                for (let i=0;i<bleeding_str_arr.length;i++) {
                    Troubles_sort.push('Тяжелое кровотечение')
                }
            }
        } if (priority_arr[i] === 'Легкое кровотечение') {
            let bleeding_sm_arr = trouble_arr_heal.filter(el => el === 'Легкое кровотечение')
            if (bleeding_sm_arr.length >= 1) {
                for (let i=0;i<bleeding_sm_arr.length;i++) {
                    Troubles_sort.push('Легкое кровотечение')
                } 
            }
        }
    }
    bandaging(Troubles_sort)
}

// последний скрипт, который по 1разу лечит всякую хуйню

function bandaging(Troubles_sort) {
    if (Troubles.length) {
        chek_heal()
        let hp_part_now = 0;
        switch(Troubles_sort[0]) {
            case 'Легкое кровотечение':
                let double_bleed = document.querySelector('.DoubleBleeding_true');
                let bleed = document.querySelector('.Bleeding_true');
                if (double_bleed) {
                    double_bleed.classList.remove('DoubleBleeding_true')
                    Troubles_sort.shift()
                } else {
                    bleed.classList.remove('Bleeding_true')
                    //лечим легкое кровотечение
                    Troubles_sort.shift()
                }
                break
            case 'Тяжелое кровотечение':
                let bleed_str = document.querySelector('.BleedingStrong_true');
                if (bleed_str) {
                    bleed_str.classList.remove('BleedingStrong_true')
                    Troubles_sort.shift()
                }
                break
                case 'Голова':
                    hp_part_now = Head_HP + HealSum
                    if (hp_part_now >= Head.max_hp) {
                        Head_HP = Head.max_hp;
                        HP_array[0] = Head.max_hp;
                        PercentGradient_array[0] = Math.round((Head_HP / HumanBody_array[0].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        Head_HP = hp_part_now;
                        HP_array[0] = hp_part_now;
                        PercentGradient_array[0] = Math.round((Head_HP / HumanBody_array[0].max_hp) * 100);
                    }
                    break;
                case 'Грудь':
                    hp_part_now = Body_HP + HealSum;
                    if (hp_part_now >= Body.max_hp) {
                        Body_HP = Body.max_hp;
                        HP_array[1] = Body.max_hp;
                        PercentGradient_array[1] = Math.round((Body_HP / HumanBody_array[1].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        Body_HP = hp_part_now;
                        HP_array[1] = hp_part_now;
                        PercentGradient_array[1] = Math.round((Body_HP / HumanBody_array[1].max_hp) * 100);
                    }
                    break;
                case 'Живот':
                    hp_part_now = Stomach_HP + HealSum;
                    if (hp_part_now >= Stomach.max_hp) {
                        Stomach_HP = Stomach.max_hp;
                        HP_array[2] = Stomach.max_hp;
                        PercentGradient_array[2] = Math.round((Stomach_HP / HumanBody_array[2].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        Stomach_HP = hp_part_now;
                        HP_array[2] = hp_part_now;
                        PercentGradient_array[2] = Math.round((Stomach_HP / HumanBody_array[2].max_hp) * 100);
                    }
                    break;
                case 'Левая рука':
                    hp_part_now = LeftHand_HP + HealSum;
                    if (hp_part_now >= LeftHand.max_hp) {
                        LeftHand_HP = LeftHand.max_hp;
                        HP_array[3] = LeftHand.max_hp;
                        PercentGradient_array[3] = Math.round((LeftHand_HP / HumanBody_array[3].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        LeftHand_HP = hp_part_now;
                        HP_array[3] = hp_part_now;
                        PercentGradient_array[3] = Math.round((LeftHand_HP / HumanBody_array[3].max_hp) * 100);
                    }
                    break;
                case 'Правая рука':
                    hp_part_now = RightHand_HP + HealSum;
                    if (hp_part_now >= RightHand.max_hp) {
                        RightHand_HP = RightHand.max_hp;
                        HP_array[4] = RightHand.max_hp;
                        PercentGradient_array[4] = Math.round((RightHand_HP / HumanBody_array[4].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        RightHand_HP = hp_part_now;
                        HP_array[4] = hp_part_now;
                        PercentGradient_array[4] = Math.round((RightHand_HP / HumanBody_array[4].max_hp) * 100);
                    }
                    break;
                case 'Левая нога':
                    hp_part_now = LeftLeg_HP + HealSum;
                    if (hp_part_now >= LeftLeg.max_hp) {
                        LeftLeg_HP = LeftLeg.max_hp;
                        HP_array[5] = LeftLeg.max_hp;
                        PercentGradient_array[5] = Math.round((LeftLeg_HP / HumanBody_array[5].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        LeftLeg_HP = hp_part_now;
                        HP_array[5] = hp_part_now;
                        PercentGradient_array[5] = Math.round((LeftLeg_HP / HumanBody_array[5].max_hp) * 100);
                    }
                    break;
                case 'Правая нога':
                    hp_part_now = RightLeg_HP + HealSum;
                    if (hp_part_now >= RightLeg.max_hp) {
                        RightLeg_HP = RightLeg.max_hp;
                        HP_array[6] = RightLeg.max_hp;
                        PercentGradient_array[6] = Math.round((RightLeg_HP / HumanBody_array[6].max_hp) * 100);
                        Troubles_sort.shift()
                    } else {
                        RightLeg_HP = hp_part_now;
                        HP_array[6] = hp_part_now;
                        PercentGradient_array[6] = Math.round((RightLeg_HP / HumanBody_array[6].max_hp) * 100);
                    }
                    break;
        }
        calc_percent()
    } else {
        Troubles_sort = [];
    }
    
}

// проходим по аптечкам и записываем сколько МАКСИМУМ вылечим с 1лечения
function chek_heal() {
    let fak = document.querySelector(".FirstAidKits-Fak_activeFAK");
    for(let i=0;i<FAKs_array.length;i++) {
        if (fak.id === FAKs_array[i].id) {
            HealSum = FAKs_array[i].max_heal;
            return HealSum
        }
    }
}


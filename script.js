// let  user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${user.name} ${user.surname}`
//     },
//     set fullName(val){
//         let arr = val.split(' ');
//         this.name = arr[0];
//         this.surname = arr[1];
//     }
// }

// console.log(user);

// user.fullName = 'Вася Пупкин';

// console.log(user);

const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        cost: 10000,
        kcall: 400,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        cost: 20500,
        kcall: 500,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        cost: 31900,
        kcall: 700,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get sumkcall(){
            return this.kcall * this.amount;
        }
    },
}


const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        cost: 500,
        kcall: 60,
    },
    lettuce: {
        name: 'Салатный лист',
        cost: 300,
        kcall: 20,
    },
    cheese: {
        name: 'Салатный лист',
        cost: 1000,
        kcall: 100,
    },
}


// product.freshCombo.amount = 5;
// console.log(product.freshCombo.sumkcall);

const btn = document.querySelectorAll('.main__product-btn');

console.log(btn);

for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    
    element.addEventListener('click', function (e) {  
        e.preventDefault()
        add(this);
    })
}

function add(button) {  
    // el.getAttribute('name') - Вернет значение атрибута
    // el.setAttribute('name', val) - Добавляет атрибут и значение для него
    // el.hasAttribute('name') - Проверяет наличие арибута
    // el.removeAttribute('name') - Удаляет арибут
    let simbl = button.getAttribute('data-symbol');
    let parent = button.closest('.main__product');
    let id = parent.getAttribute('id')
    
    if(simbl == '+'){
        product[id].amount++;
    }else if(product[id].amount > 0){
        product[id].amount--;
    }
    
    let output = parent.querySelector('.main__product-num');
    let spanPrice = parent.querySelector('.main__product-price span');
    let spanKcall = parent.querySelector('.main__product-kcall');
    
    output.innerHTML = product[id].amount;
    spanPrice.innerHTML = product[id].summ;
    spanKcall.innerHTML = product[id].sumkcall;
    
    console.log(spanPrice);
    
}

//ДЗ 1

var level = document.querySelector('header__timer-extra');
var lvl = 0

function recursion() {
    do {
        lvl.innerHTML = level
        lvl++
    } while (lvl <= 100);
}
recursion()

/* incomplete */

//ДЗ 2

const dbl = document.querySelectorAll('.main__product-info');
const screen = document.querySelector('.view');
const img = document.querySelector('.view img');
const leave = document.querySelector('.view__close');
for (let r = 0; r < dbl.length; r++) {
    const element = dbl[r];
    element.addEventListener('dblclick', () => {
        screen.classList.add('active')
        img.setAttribute('src', 'images/product2.jpg')
    })
    leave.addEventListener('click', () => {
        screen.classList.remove('active')
    })
}
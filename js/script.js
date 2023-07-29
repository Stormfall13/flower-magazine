const burgerMainMenu = document.querySelector('.burger__main-menu')
const wrappMainMenu = document.querySelector('.wrapp__main-menu')
const closeIconMain = document.querySelector('.close__icon-main')
const linkMainMenu = document.querySelectorAll('.link__main-menu')

burgerMainMenu.addEventListener('click', () => {
    wrappMainMenu.style.display = 'block';
    wrappMainMenu.style.zIndex = '4';
    setTimeout(() => {
        wrappMainMenu.style.transform = 'translate(0)';
    }, 600)
});

linkMainMenu.forEach(linkMainMenus => {
    linkMainMenus.addEventListener('click', () => {
        wrappMainMenu.style.transform = '';
        setTimeout(() => {
            wrappMainMenu.style.display = '';
            wrappMainMenu.style.zIndex = ''; 
        }, 600) 
    })
})

closeIconMain.addEventListener('click', () => {
    wrappMainMenu.style.transform = '';
    setTimeout(() => {
        wrappMainMenu.style.display = '';
        wrappMainMenu.style.zIndex = ''; 
    }, 600)
});


const wrappSecondMenu = document.querySelector('.wrapp__second-menu')
const burgerSecondMenu = document.querySelector('.burger__second-menu')
const closeIconSecond = document.querySelector('.close__icon-second')
const linkSecondMenu = document.querySelectorAll('.link__second-menu')


burgerSecondMenu.addEventListener('click', () => {
    wrappSecondMenu.style.display = 'block';
    wrappSecondMenu.style.zIndex = '4';
    setTimeout(() => {
        wrappSecondMenu.style.transform = 'translate(0)';
    }, 600)
});

linkSecondMenu.forEach(linkSecondMenus => {
    linkSecondMenus.addEventListener('click', () => {
        wrappSecondMenu.style.transform = '';
        setTimeout(() => {
            wrappSecondMenu.style.display = '';
            wrappSecondMenu.style.zIndex = ''; 
        }, 600) 
    })
})

closeIconSecond.addEventListener('click', () => {
    wrappSecondMenu.style.transform = '';
    setTimeout(() => {
        wrappSecondMenu.style.display = '';
        wrappSecondMenu.style.zIndex = ''; 
    }, 600)
});



function hoverCard(){
    const card = document.querySelectorAll('.card')
    for ( let cards of card){
        cards.onmouseover = () => {
            cards.style.boxShadow = '0px 0px 8px 0px #444';
            cards.style.zIndex = '1';
            cards.style.transform = 'scale(1.1)';
        };
        cards.onmouseout = () => {
            cards.style.boxShadow = '';
            cards.style.zIndex = '';
            cards.style.transform = '';
        };  
    } 
}


let screen = window.innerWidth
if(screen > 768){
    hoverCard();
}else{
    console.log('Адаптация');
}



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    }, 
    breakpoints:{
        320:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 2,
        },
    },
});



const formClickClose = document.querySelector('.form__click-close')
const popupClick = document.querySelector('.popup__click')
const btnBuy = document.querySelectorAll('.btn__buy')
const validateClose = document.querySelector('.validate__close')
const btnClick = document.querySelector('.btn__click')
const formClick = document.querySelector('.form__click')
const validateSucces = document.querySelector('.validate__success')
const hiddenInput = document.querySelector('.hidden__input')
const cenaInput = document.querySelector('.cena__input')
const priceText = document.querySelector('.price__text')
const priceFirst = document.querySelector('.price__first')

for (let btnBuys of btnBuy){
    btnBuys.addEventListener('click', () => {
        popupClick.style.display = 'flex'
        formClick.style.display = ''
        setTimeout(() => {
            popupClick.style.opacity = '1'
        }, 800)
        hiddenInput.value = priceText.textContent.trim()
        cenaInput.value = priceFirst.textContent.trim()
        // console.log(hiddenInput.value)
        // console.log(cenaInput.value)
    })
}

formClickClose.addEventListener('click', () => {
    popupClick.style.opacity = ''
    setTimeout(() => {
        popupClick.style.display = '' 
    }, 800)
    hiddenInput.value = ''
    cenaInput.value = ''
})

validateClose.addEventListener('click', () => {
    popupClick.style.opacity = ''
    validateSucces.style.display = ''
    setTimeout(() => {
        popupClick.style.display = '' 
    }, 800) 
    hiddenInput.value = ''
    cenaInput.value = ''
})

btnClick.addEventListener('click', () => {
    formClick.style.display = 'none'
    validateSucces.style.display = 'block'
    hiddenInput.value = ''
    cenaInput.value = ''
})

let prodElement = document.querySelectorAll('.card__season')
const btnLazy = document.querySelector('.btn__show')


for(let i = 0; i < prodElement.length; i++){
    btnLazy.addEventListener("click", function(){
        if(i > 2 && i < 8){
            function elementOpacity_3_and_8(){
                prodElement[i].style.opacity = '1'
            }
            setTimeout(elementOpacity_3_and_8, 600)
            prodElement[i].style.display = ''
        }         
    })
}

for(let i = 0; i < prodElement.length; i++){
    if(i > 2 && i < 8){
        prodElement[i].style.display = 'none'
        prodElement[i].style.opacity = '0'
    }     
}

let prodElementHit = document.querySelectorAll('.card__hit')
const btnLazyHit = document.querySelector('.btn__show-hit')


for(let i = 0; i < prodElementHit.length; i++){
    btnLazyHit.addEventListener("click", function(){
        if(i > 2 && i < 8){
            function elementOpacity_3_and_8(){
                prodElementHit[i].style.opacity = '1'
            }
            setTimeout(elementOpacity_3_and_8, 600)
            prodElementHit[i].style.display = ''
        }         
    })
}

for(let i = 0; i < prodElementHit.length; i++){
    if(i > 2 && i < 8){
        prodElementHit[i].style.display = 'none'
        prodElementHit[i].style.opacity = '0'
    }     
}

let prodElementDiscount = document.querySelectorAll('.card__discount')
const btnLazyDiscount = document.querySelector('.btn__show-discount')


for(let i = 0; i < prodElementDiscount.length; i++){
    btnLazyDiscount.addEventListener("click", function(){
        if(i > 2 && i < 8){
            function elementOpacity_3_and_8(){
                prodElementDiscount[i].style.opacity = '1'
            }
            setTimeout(elementOpacity_3_and_8, 600)
            prodElementDiscount[i].style.display = ''
        }         
    })
}

for(let i = 0; i < prodElementDiscount.length; i++){
    if(i > 2 && i < 8){
        prodElementDiscount[i].style.display = 'none'
        prodElementDiscount[i].style.opacity = '0'
    }     
}


const arrowUp = document.querySelector('.arrow__up')
arrowUp.addEventListener('click', () => {
    scrollElement()
})
function scrollElement(){
    var element = document.querySelector('header');
    element.scrollIntoView({behavior: "smooth"});
}

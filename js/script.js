
function whenBurgerOpen() {
    listMenu.css({
            height: '0px'
        })
        if(window.innerWidth < 960) {
            for (let i=1; i < listElem.length; i++) {
                setTimeout(function (){
                        listElem[i].style.opacity = "0.4"
                        listElem[i].style.transition = '0.2s linear'       
                }, 300);

                setTimeout(function (){
                        listElem[i].style.display = "none"         
                }, 500);
            }
            if(scroll<200.9) {
             $('.header__menu').css({
                background: '#ED1B24'
                })
            }
        }
        $('.div-burger-menu').css({
             background: 'unset'
        })
        isClose = true
}

//let scroll = $(window).scrollTop();
// фиксирование полоски меню в header

$(window).scroll(function (event) {
    let scrollx = $(window).scrollTop();
    
    if(scrollx>200.9) {
    	
    	$('.header__for-fixed').css({position:'fixed',
			top:'0px'})
    	$('.header__menu').css({position:'fixed'})
    	$('.header__menu').css({
    		background: '#401A1C',
    		transition: '0.9s linear'
    })
    }
    else {

    	$('.header__for-fixed').css({position:'unset',
			top:'200px'})
    	$('.header__menu').css({position:'unset', background:'#ED1B24' })
    }
});

// фикс бага  
let mobileChecker 
if (window.innerWidth < 960) {mobileChecker = true} else {mobileChecker = false}

let timerWidthChecker = setInterval(function() {
    if (window.innerWidth > 960 && mobileChecker == false) {

            $('.header__menu').css({background: '#ED1B24'})
            listElem[1].style.opacity = "1"
            listElem[2].style.opacity = "1"
            listElem[3].style.opacity = "1"
            listElem[4].style.opacity = "1"
            listElem[5].style.opacity = "1"
            listElem[6].style.opacity = "1"

            listElem[1].style.display = "unset"
            listElem[2].style.display = "unset"
            listElem[3].style.display = "unset"
            listElem[4].style.display = "unset"
            listElem[5].style.display = "unset"
            listElem[6].style.display = "unset"

            whenBurgerOpen()
            mobileChecker = true
    }
    else if(window.innerWidth <= 960 && mobileChecker == true) {

            $('.header__menu').css({background: '#ED1B24'})
            listElem[1].style.display = ""
            listElem[2].style.display = ""
            listElem[3].style.display = ""
            listElem[4].style.display = ""
            listElem[5].style.display = ""
            listElem[6].style.display = ""

            mobileChecker = false
    }
}, 1)

// анимация открытия и закрытия бургер-меню   

let isClose = true
let listMenu = $('#list')
let listElem = document.querySelectorAll('li.header__elem') 

document.getElementById("burger").addEventListener("click", function burgerOpenClose() {
           
    if(isClose) {

        $('.header__list').css({
                 opacity: "1"   
            })   

        $('.header__menu').css({
            background: '#401A1C',
            transition: '0.39s linear'
        })
       
        listMenu.css({
            transition: 'height 0.6s cubic-bezier(0.4, 0, 0.5, 1) 500ms',
            height: '336px'
        })

            for (let i=1; i < listElem.length; i++) {

                    setTimeout(function (){
                        listElem[i].style.display = "unset"
                    }, 860);

                    setTimeout(function (){
                        listElem[i].style.opacity = "1"
                        listElem[i].style.transition = '0.25s linear'
                    }, 870);
            }
        $('.div-burger-menu').css({
             background: '#ED1B24'
        })
           
        isClose = false
    }
    else {
        whenBurgerOpen()
    }
})


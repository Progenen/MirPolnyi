
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }

    // Бургер меню

    const menu = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.header-menu');

    if (menu != null) {
        menu.addEventListener('click', function() {
        let group = [menu, menuBody];

        group.forEach(element => {
            element.classList.toggle('active')
        });
        
    });
    }
    
    ibg();

    // Главный слайдер на главной странице
    var mySwiper = new Swiper('.swiper-banner', {
        speed: 400,
        spaceBetween: 100,
        resistanceRatio: 1,
        loop: true,
        autoplay: {
            delay: 3000,
          },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });

    // Второй слайдер на главной странице 
    var mySwiper = new Swiper('.swiper-home', {
        speed: 300,
        loop: true,
        resistanceRatio: 2,
        spaceBetween: 30,
        slidesPerView: 2.5,
        slideToClickedSlide: true,
        centeredSlides: true,
        loop: true,
        breakpoints: {  
            320: {
                slidesPerView: 1,
            },
            860: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 1.5,
            },
            
            1200: {
                slidesPerView: 1.7,     
            },
            1600: {
                slidesPerView: 2.5,
            },
        },
        pagination: {
            el: '.home-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 6,
            clickable: true,
          },
    
    });

    // Скрипт поиска и его адаптив

    const results = document.querySelector('.search-results');
    const search = document.querySelector('.search-panel');
    const headerSearch = document.querySelector('.header-search__form');
    const searchClear = document.querySelector('.header-search__clear');
    const searchBtn = document.querySelector('.header-search__btn');
    const searchBtnCopy = document.querySelector('.header-search__btn_copy');
    
    function searchClose() {
        search.value = '';
        search.classList.remove('active'); 
        searchBtn.classList.remove('active');
        searchClear.style.display = 'none';
    }

    if (document.body.clientWidth < 990) {
        searchBtnCopy.addEventListener('click', ()=> {
            headerSearch.classList.add('active');
            headerSearch.style.width = `${document.body.clientWidth - 30}px`;
            search.classList.add('active');
            searchClear.classList.add('active');
            searchClear.style.display = 'block';
            search.focus();
            searchClear.addEventListener('click', (e)=> {
                e.preventDefault();
                search.value = '';
                headerSearch.classList.remove('active');
            });
        });
        
    } 
    

    search.addEventListener('click', ()=> {
        searchClear.style.display = 'block';
        search.classList.add('active');
        searchBtn.classList.add('active');
        searchClear.addEventListener('click', (e)=> {
            e.preventDefault();
            searchClose();
        });
    });

    const activeHideMenu = document.querySelectorAll('.spoiler');
    const hideMenu = document.querySelectorAll('.hide-menu');
    const arrow = document.querySelectorAll('.arrow');
    
    for (let i = 0; i < activeHideMenu.length; i++) {
        document.addEventListener('click', e => {
            let target = e.target;
            let its_menu = target == hideMenu[i] || hideMenu[i].contains(target);
            let its_activeHideMenu = target == activeHideMenu[i];
            let menu_is_active = hideMenu[i].classList.contains('hidden');
            
            if (!its_menu && !its_activeHideMenu && menu_is_active) {
              toggleMenu();
            }
          });
        const toggleMenu = () => {
            hideMenu[i].classList.toggle('hidden');
            arrow[i].classList.toggle('active');
            
        };

        activeHideMenu[i].addEventListener('click', ()=> {
            toggleMenu();
            
        });
        
    }

    // Адаптив элементов
    
    if (document.body.clientWidth < 990) {
        const upMenu = document.querySelector('.up-menu');
        const mobMenu = document.querySelector('.header-menu-wrap');
        const contacts = document.querySelector('.header__contacts');
        const upHeader = document.querySelector('.up');
        const container = document.querySelector('.remove_cont');
        
        for (let i = 0; i < activeHideMenu; i++) {
            mobMenu.append(hideMenu[i]);
        }
        upHeader.append(contacts);
        mobMenu.append(upMenu);
    }
    

    
    $("a#gallery").fancybox();
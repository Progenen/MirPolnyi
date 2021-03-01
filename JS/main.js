document.addEventListener('DOMContentLoaded', function() {

  
	if (document.querySelector('.burger-menu') != undefined) { // Для того чтобы скрипты не конфликтовали

		// Мобильное меню. Начало

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

		// Мобильное меню. Конец

		// Главный слайдер на главной странице. Начало
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

		// Главный слайдер на главной странице. Конец
	
		// Второй слайдер на главной странице. Начало
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

		// Второй слайдер на главной странице. Конец
	
		// Скрипт поиска и его адаптив. Начало
	
		const results = document.querySelector('.search-results');
		const search = document.querySelector('.search-panel');
		const headerSearch = document.querySelector('.header-search__form');
		const searchClear = document.querySelector('.header-search__clear');
		const searchBtn = document.querySelector('.header-search__btn');
		const searchBtnCopy = document.querySelector('.header-search__btn_copy');
		

		// отвечает за очистку после нажатия на крестик в поиске на главной
		function searchClose() {
			search.value = '';
			search.classList.remove('active'); 
			searchBtn.classList.remove('active');
			searchClear.style.display = 'none';
		}
		
		// Адаптив поиска на главной
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
		
		// Отвечает за активацию поиска после нажатие на поле ввода
		search.addEventListener('click', ()=> {
			searchClear.style.display = 'block';
			search.classList.add('active');
			searchBtn.classList.add('active');
			searchClear.addEventListener('click', (e)=> {
				e.preventDefault();
				searchClose();
			});
		});

		// Скрипт поиска и его адаптив. Конец


		// Выпадающие меню. Начало
	
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

		// Выпадающие меню. Конец
	
		// Перенос элементов в мобильное меню. Начало
		
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

		// Перенос элементов в мобильное меню. Конец

		$("a#gallery").fancybox(); // Инициализайция галереи

	}

	if (document.querySelector('.product') != undefined) { // Для того чтобы скрипты не кофликтовали. Всё что ниже это скрипты для страницы товара

		// Ездящая карточка. Начало
		function scrollBlock () { 
			var a = document.querySelector('.card-wrapper'), b = null, P = 55;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
			window.addEventListener('scroll', Ascroll, false);
			document.body.addEventListener('scroll', Ascroll, false);
			function Ascroll() {
				if (b == null) {
					var Sa = getComputedStyle(a, ''), s = '';
					for (var i = 0; i < Sa.length; i++) {
						if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
							s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
						}
					}
					b = document.createElement('div');
					b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
					a.insertBefore(b, a.firstChild);
					var l = a.childNodes.length;
					for (var i = 1; i < l; i++) {
						b.appendChild(a.childNodes[1]);
					}
					a.style.height = b.getBoundingClientRect().height + 'px';
					a.style.padding = '0';
					a.style.border = '0';
				}
				var Ra = a.getBoundingClientRect(),
					R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.gallery').getBoundingClientRect().top + 55);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
				if ((Ra.top - P) <= 0) {
					if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = - R +'px';
					} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
					}
				} else {
					b.className = '';
					b.style.top = '';
				}
				window.addEventListener('resize', function() {
					a.children[0].style.width = getComputedStyle(a, '').width
				}, false);
			}
		}
		  
		if (document.documentElement.clientWidth > 1000) {
			scrollBlock();
		}

		if (document.documentElement.clientWidth < 1000) { // Перемещение карточки вниз после 1000px
			let cardW = document.querySelector('.card-wrapper');
			document.querySelector('.card-pos').append(cardW);
		}

		// Ездящая карточка. Конец
		
		// Создания слайдера из галереи. Начало

		if (document.documentElement.clientWidth < 580) {
			let slides = document.querySelectorAll('.gallery__item');
			let slidesWrapper = document.querySelector('.swiper-wrapper');
			let galleryContent = document.querySelectorAll('.gallery-info');
	
			galleryContent.forEach(element => {
				element.remove();
			});
			
			slides.forEach(element => {
				slidesWrapper.append(element);
				element.classList.add('swiper-slide');
			});
			
			var mySwiper = new Swiper('.product-slider', {
				spaceBetween: 30,
				pagination: {
					el: '.product-pagination',
					dynamicMainBullets: 6,
				}
			});
		}

		// Создания слайдера из галереи. Конец

		// Спойлеры свернуть - развернуть. Начало
		
		const textAdaptive = document.querySelectorAll('.wrapper-text, p, .product-days-card__text');
	
		textAdaptive.forEach(element => {
			if (element.clientHeight > 399) {
				element.classList.add('text-clip');
				let blockClip = document.createElement('div');
				blockClip.classList.add('textSpoiler');
				blockClip.innerHTML = 'Развернуть <img src="images/icons/arrowTextSpoiler.svg">'
				element.append(blockClip);
	
				blockClip.addEventListener('click', ()=> {
					element.classList.toggle('text-clip-active');
					blockClip.classList.toggle('textSpoiler-active');
					if (blockClip.innerHTML == 'Развернуть <img src="images/icons/arrowTextSpoiler.svg">') {
						blockClip.innerHTML = 'Свернуть <img src="images/icons/arrowTextSpoiler.svg">';
					} else {
						blockClip.innerHTML = 'Развернуть <img src="images/icons/arrowTextSpoiler.svg">'
					}
				});
			}
		});

		// Спойлеры свернуть - развернуть. Конец

		// Скролл таблицы. Начало

		$('.mycustom-scroll').mCustomScrollbar({
			axis: 'x',              // вертикальный скролл 
			scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
			mouseWheel: {
				deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
			},
			advanced:{  
				updateOnBrowserResize:true,   
				updateOnContentResize:true   
			} 
		});

		// Скролл таблицы. Конец
	}

	const btnModal = document.querySelectorAll('.modal-btn'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');

    function openModal() {
        modal.classList.toggle('show');
		document.body.classList.toggle('lock');
    }

    function closeModal() {
        modal.classList.toggle('show');
		document.body.classList.toggle('lock');
    }

    btnModal.forEach(element => {
        element.addEventListener('click', (e)=> {
			e.preventDefault();
			openModal();
		});
    });

    modalClose.addEventListener('click', ()=> {
        closeModal();
    });

    modal.addEventListener('click', (e)=> {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e)=> {
        if (e.code = "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

	const modalDatesItem = document.querySelectorAll('.modal-dates__item');
	const formTemplate = document.querySelector('.form-template');
	const formTemplateClose = document.querySelector('.form-template__close');

	modalDatesItem.forEach(element => {
		element.addEventListener('click', (e)=> {
			e.preventDefault();
			formTemplate.classList.toggle('show');
			closeModal();
			document.body.classList.toggle('lock');
		})
	});

	formTemplateClose.addEventListener('click', (e)=> {
		formTemplate.classList.toggle('show');
	})
    
});

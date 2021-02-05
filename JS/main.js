document.addEventListener('DOMContentLoaded', function() {
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
	  if (document.documentElement.clientWidth < 1000) {
		let cardW = document.querySelector('.card-wrapper');
		


		document.querySelector('.card-pos').append(cardW);
	  }

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
});

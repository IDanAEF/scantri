function slider() {
    try {
        const sliderPages = document.querySelectorAll('.slider__page'),
              sliderTabs = document.querySelectorAll('.slider__tabs span');

        const setPage = (i = 0) => {
            sliderPages.forEach(item => item.classList.remove('active'));
            sliderTabs.forEach(item => item.classList.remove('active'));

            sliderPages[i].classList.add('active');
            sliderTabs[i].classList.add('active');
        }

        setPage();

        sliderTabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                setPage(i);
            });
        });

        const itemWidth = (item) => {
            return 2 * (item.clientWidth + +window.getComputedStyle(item).marginRight.replace(/[a-zа-яё]/gi, ''));
        }

        sliderPages.forEach(page => {
            const sliderLine = page.querySelector('.slider__line'),
                  sliderRight = page.querySelector('.slider__arrows img.right'),
                  sliderLeft = page.querySelector('.slider__arrows img.left'),
                  sliderItems = page.querySelectorAll('.slider__item'),
                  sliderArrowsPlace = page.querySelector('.slider__arrows');
    
            let curr = 0,
                steps = Math.floor((sliderItems.length - 1) / 2);

            if (sliderItems.length >= 4) {
                sliderRight.addEventListener('click', () => {
                    curr == steps ? curr = 0 : curr++;
                    sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
                });

                sliderLeft.addEventListener('click', () => {
                    curr == 0 ? curr = steps : curr--;
                    sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
                });

                let startPos = 0;
        
                sliderLine.addEventListener('touchstart', (e) => {
                    startPos = e.changedTouches[0].screenX;
                });
            
                sliderLine.addEventListener('touchend', (e) => {
                    if (startPos - e.changedTouches[0].screenX > 50) {
                        curr == steps ? curr = 0 : curr++;
                        sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
                    } else if (startPos - e.changedTouches[0].screenX < -50) {
                        curr == 0 ? curr = steps : curr--;
                        sliderLine.style.transform = `translateX(-${curr * itemWidth(sliderItems[0])}px)`;
                    }
                });
            } else {
                sliderArrowsPlace.classList.add('hide');
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default slider;
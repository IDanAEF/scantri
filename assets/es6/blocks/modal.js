function modal() {
    try {
        const modalPlace = document.querySelector('.modal'),
              modalItems = document.querySelectorAll('.modal__item'),
              sliderCont = document.querySelector('.slider'),
              btnCall = document.querySelectorAll('button[data-modal]');

        const carNameInp = document.querySelector('#carName'),
              carTypeInp = document.querySelector('#carType');

        const closeModal = () => {
            modalItems.forEach(item => item.classList.remove('active'));
            modalPlace.classList.remove('active');
            document.querySelector('body').style.overflow = '';
        }

        const openModal = (modalType) => {
            modalItems.forEach(item => {
                if (item.classList.contains(modalType)) {
                    item.classList.add('active');
                }
            });
            modalPlace.classList.add('active');
            document.querySelector('body').style.overflow = 'hidden';
        }

        btnCall.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal(btn.getAttribute('data-modal'));
            });
        });

        sliderCont.addEventListener('click', (e) => {
            if (e.path.some(item => item.nodeName == 'ARTICLE')) {
                let elem = e.path.filter(item => item.nodeName == 'ARTICLE')[0];
                carNameInp.value = elem.getAttribute('data-name');
                carTypeInp.value = elem.getAttribute('data-type');
                openModal('order');
            }
        });

        modalPlace.addEventListener('click', (e) => {
            if (e.target == modalPlace || e.target.classList.contains('modal__close')) {
                closeModal();
            }
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default modal;
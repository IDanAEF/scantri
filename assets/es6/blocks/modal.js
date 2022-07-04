function modal() {
    try {
        const modalPlace = document.querySelector('.modal'),
              modalItems = document.querySelectorAll('.modal__item'),
              sliderCont = document.querySelector('.slider'),
              btnCall = document.querySelectorAll('button[data-modal]'),
              modalInputs = document.querySelectorAll('.modal__item input');

        const carNameInp = document.querySelector('#carName'),
              carTypeInp = document.querySelector('#carType');

        const closeModal = () => {
            modalItems.forEach(item => item.classList.remove('active'));
            modalPlace.classList.remove('active');
            modalInputs.forEach(item => item.value = '');
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
            let curPath = e.path || (e.composedPath && e.composedPath());
            let elem = curPath.filter(item => item.nodeName == 'ARTICLE');
            if (elem) {
                carNameInp.value = elem[0].getAttribute('data-name');
                carTypeInp.value = elem[0].getAttribute('data-type');
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
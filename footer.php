<footer class="footer">
    <a href="/" class="footer__logo">
        <img src="/assets/images/logo.svg" alt="Logo">
    </a>
    <div class="container">
        <div class="footer__top text_white text_fz24 text_fw700 text_ffDin">
            <a href="mailto:info@scantri.com"><img src="/assets/images/mail.svg" alt="mail">info@scantri.com</a>
            <span><img src="/assets/images/map.svg" alt="map">2464 Royal Ln. Mesa, New Jersey 45463</span>
            <a href="tel:31208943811"><img src="/assets/images/phone.svg" alt="phone">+31 20 894 38 11</a>
        </div>
        <hr>
        <div class="footer__under text_white text_fz16">
        Информация, опубликованная на страницах этого сайта защищена резервируя право интеллектуальной собственности.<br>Авторские права защищены© Scantri.com
        </div>
    </div>
</footer>
<div class="modal">
    <div class="modal__item modal__call call">
        <div class="modal__content">
            <img class="modal__close" src="/assets/images/close.svg" alt="close">
            <div class="modal__title title title_fz42 text_ffDays">Оставьте ваши контактные данные</div>
            <div class="modal__undertitle text text_fz20">и наш специалист свяжется с вами в течении 15 минут</div>
            <form action="/mail/" class="text text_fz18">
                <input type="text" name="name" placeholder="Ваше имя*" require>
                <input type="tel" name="phone" placeholder="Ваш телефон*" require>
                <button class="button button_promo text text_fz24">Отправить</button>
            </form>
            <div class="modal__pos text text_fz16">Нажимая кнопку, вы соглашаетесь с нашей политикой в отношении обработки персональных данных.</div>
        </div>
    </div>
    <div class="modal__item modal__appl appl">
        <img class="modal__close" src="/assets/images/close.svg" alt="close">
        <div class="modal__left">
            <div class="modal__title title title_fz42 text_ffDays">Оставьте ваши контактные данные</div>
            <div class="modal__undertitle text text_fz20">и наш специалист свяжется с вами в течении 30 минут</div>
            <form action="/mail/" class="text text_fz18">
                <input type="text" name="name" placeholder="Ваше имя*" required>
                <input type="email" name="email" placeholder="Ваше email*" required>
                <input type="tel" name="phone" placeholder="Ваш телефон*" required>
                <button class="button button_promo text text_fz24">Отправить</button>
            </form>
            <div class="modal__pos text text_fz16">Нажимая кнопку, вы соглашаетесь с нашей политикой в отношении обработки персональных данных.</div>
        </div>
        <div class="modal__right">
            <img src="/assets/images/appl.jpg" alt="appl" class="img_bg">
        </div>
    </div>
    <div class="modal__item modal__order order">
        <img class="modal__close" src="/assets/images/close.svg" alt="close">
        <div class="modal__left">
            <div class="modal__title title title_fz42 text_ffDays">Оставьте ваши контактные данные</div>
            <div class="modal__undertitle text text_fz20">и наш специалист свяжется с вами в течении 30 минут</div>
            <form action="/mail/" class="text text_fz18">
                <input type="text" name="name" placeholder="Ваше имя*" required>
                <input id="carName" type="text" placeholder="Транспорт:" readonly>
                <input type="tel" name="phone" placeholder="Ваш телефон*" required>
                <input id="carType" type="text" name="type" hidden>
                <button class="button button_promo text text_fz24">Отправить</button>
            </form>
            <div class="modal__pos text text_fz16">Нажимая кнопку, вы соглашаетесь с нашей политикой в отношении обработки персональных данных.</div>
        </div>
        <div class="modal__right">
            <img src="/assets/images/order.jpg" alt="appl" class="img_bg">
        </div>
    </div>
</div>
<script src="/assets/js/script.js"></script>
</body>
</html>
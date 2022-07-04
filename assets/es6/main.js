import slider from "./blocks/slider";
import mask from "./blocks/mask";
import modal from "./blocks/modal";
import form from "./blocks/form";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    mask('input[type="tel"]');
    slider();
    modal();
    form();
});
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-acc', {
    duration: 1000,
    showMultiple: true,

    elementClass: 'faq-acc-el',
    triggerClass: 'faq-acc-el-trigger',
    panelClass: 'faq-acc-el-descr-frame',
    openOnInit: [-1],
});

document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const arrow = parentElement.querySelector('.faq-img');
        const isOpen = parentElement.classList.contains('open');

        document.querySelectorAll('.faq-acc-el').forEach(el => {
            el.classList.remove('open');
            el.querySelector('.faq-img')?.classList.remove('rotated');
            const panel = el.querySelector('.faq-acc-el-descr-frame');
            if (panel) {
                panel.style.maxHeight = null;
            }
        });


        if (!isOpen) {
            parentElement.classList.add('open');
            arrow?.classList.add('rotated');
            if (panel) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    });
});
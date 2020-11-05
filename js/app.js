const $inner = document.querySelector('.content__inner');

const $span = document.querySelector('.content__inner__error'),
    $input = document.querySelector('.content__inner__form-input');

const media = window.matchMedia('(max-width: 1023px)');

const mediaQueries = (e) => {
    if (e.matches) {
        $inner.insertAdjacentHTML('beforebegin', `<div class="content__mobile"></div>`);
        console.log('It is working!');
    }
        console.log('What the fuck did you do???');
}

function input() {
    
    if ($input.validity.valid) {
        $span.classList.add('none')
        console.log('You get it');
    } else {
        console.log('Nah, u screwed it up');
        $span.classList.remove('none')
    }
}

document.addEventListener('keyup', input);

media.addEventListener('change', mediaQueries);

mediaQueries(media);
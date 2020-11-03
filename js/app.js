const $inner = document.querySelector('.content__inner');

const media = window.matchMedia('(max-width: 1023px)');

const mediaQueries = (e) => {
    if (e.matches) {
        $inner.insertAdjacentHTML('beforebegin', `<div class="content__mobile"></div>`);
        console.log('It is working!');
    }
        console.log('What the fuck did you do???');
}

media.addEventListener('change', mediaQueries);

mediaQueries(media);
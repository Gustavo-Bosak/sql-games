window.onscroll = function() {
    if (window.scrollY < 330) {
        document.querySelector('header').style.position = 'absolute';
    } else if (window.scrollY > 331) {
        document.querySelector('header').style.position = 'fixed';
    }
}
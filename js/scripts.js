$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['hello', 'work', 'contact'],
        menu: '#nav-menu',
        // sectionSelector: '.page',
        // scrollOverflow: true,
        easing: 'easeInExpo',
        css3: true,
        scrollingSpeed: 555,
        navigation: true,

    });

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});
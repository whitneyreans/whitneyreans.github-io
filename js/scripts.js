$(document).ready(function() {
    $('#fullpage').fullpage({
    	   anchors: ['hello', 'work', 'contact'],
            menu: '#nav-menu',
            sectionSelector: '.page',
            scrollOverflow: true,
            easing: 'easeInExpo',
            css3: false,
            scrollingSpeed: 555,
            navigation: true,
    });
});
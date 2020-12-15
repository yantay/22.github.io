$(document).ready(function(){
    $('#one').click(function () { // 1
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1000);
    });
});
$(document).ready(function(){
    $('#two').click(function () { // 2
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1000);
    });
});
$(document).ready(function(){
    $('#three').click(function () { // 3
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1000);
    });
});
$(document).ready(function(){
    $('#four').click(function () { // 4
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1000);
    });
});

$(document).ready(function(){
    $('.burger').click(function(event) {
        $('.burger, .nav__items').toggleClass('active');
    });
});
